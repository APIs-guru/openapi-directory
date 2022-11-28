
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/workmailmessageflow/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://workmailmessageflow.{region}.amazonaws.com",
	"https://workmailmessageflow.{region}.amazonaws.com",
	"http://workmailmessageflow.{region}.amazonaws.com.cn",
	"https://workmailmessageflow.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/workmailmessageflow/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_raw_message_content(self, request: operations.GetRawMessageContentRequest) -> operations.GetRawMessageContentResponse:
        r"""Retrieves the raw content of an in-transit email message, in MIME format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/messages/{messageId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawMessageContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRawMessageContentResponse])
                res.get_raw_message_content_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def put_raw_message_content(self, request: operations.PutRawMessageContentRequest) -> operations.PutRawMessageContentResponse:
        r"""<p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href=\"https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html\"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href=\"https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules\"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href=\"https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html\">GetRawMessageContent</a> returns an updated message. </p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/messages/{messageId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRawMessageContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.put_raw_message_content_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_content_location = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.message_rejected = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.message_frozen = out

        return res

    