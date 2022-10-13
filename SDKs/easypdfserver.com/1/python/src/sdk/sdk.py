import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.easypdfserver.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def post_make_pdf(self, request: operations.PostMakePdfRequest) -> operations.PostMakePdfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/make-pdf"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMakePdfResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.post_make_pdf_200_application_pdf_binary_string = r.content

        return res

    