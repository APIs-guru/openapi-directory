
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/personalize-runtime/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://personalize-runtime.{region}.amazonaws.com",
	"https://personalize-runtime.{region}.amazonaws.com",
	"http://personalize-runtime.{region}.amazonaws.com.cn",
	"https://personalize-runtime.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/personalize-runtime/ - Amazon Web Services documentation"""

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
        
    
    
    
    def get_personalized_ranking(self, request: operations.GetPersonalizedRankingRequest) -> operations.GetPersonalizedRankingResponse:
        r"""<p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/personalize-ranking"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonalizedRankingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPersonalizedRankingResponse])
                res.get_personalized_ranking_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_input_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def get_recommendations(self, request: operations.GetRecommendationsRequest) -> operations.GetRecommendationsResponse:
        r"""<p>Returns a list of recommended items. The required input depends on the recipe type used to create the solution backing the campaign, as follows:</p> <ul> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> <li> <p>USER_PERSONALIZATION - <code>itemId</code> optional, <code>userId</code> required</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recommendations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRecommendationsResponse])
                res.get_recommendations_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_input_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    