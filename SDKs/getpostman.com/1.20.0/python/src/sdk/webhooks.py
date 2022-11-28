import requests
from sdk.models import operations
from . import utils

class Webhooks:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_webhook(self, request: operations.CreateWebhookRequest) -> operations.CreateWebhookResponse:
        r"""Create Webhook
        Create a webhook that triggers a collection with your custom payload.
        
        You can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:
        
        * `name`: the name of the webhook that you're creating.
        * `collection`: the ID of the collection that you want to trigger once this webhook is called.
        
        Once created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    