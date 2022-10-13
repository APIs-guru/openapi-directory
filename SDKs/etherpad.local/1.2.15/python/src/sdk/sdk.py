import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://etherpad.local",
	"http://pads.mro.name/api/1.2.15",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def append_chat_message_using_get(self, request: operations.AppendChatMessageUsingGetRequest) -> operations.AppendChatMessageUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/appendChatMessage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendChatMessageUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet200ApplicationJSON])
                res.append_chat_message_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet400ApplicationJSON])
                res.append_chat_message_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet401ApplicationJSON])
                res.append_chat_message_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet500ApplicationJSON])
                res.append_chat_message_using_get_500_application_json_object = out

        return res

    
    
    def append_chat_message_using_post(self, request: operations.AppendChatMessageUsingPostRequest) -> operations.AppendChatMessageUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/appendChatMessage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendChatMessageUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost200ApplicationJSON])
                res.append_chat_message_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost400ApplicationJSON])
                res.append_chat_message_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost401ApplicationJSON])
                res.append_chat_message_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost500ApplicationJSON])
                res.append_chat_message_using_post_500_application_json_object = out

        return res

    
    
    def append_text_using_get(self, request: operations.AppendTextUsingGetRequest) -> operations.AppendTextUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/appendText"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendTextUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet200ApplicationJSON])
                res.append_text_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet400ApplicationJSON])
                res.append_text_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet401ApplicationJSON])
                res.append_text_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet500ApplicationJSON])
                res.append_text_using_get_500_application_json_object = out

        return res

    
    
    def append_text_using_post(self, request: operations.AppendTextUsingPostRequest) -> operations.AppendTextUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/appendText"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendTextUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost200ApplicationJSON])
                res.append_text_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost400ApplicationJSON])
                res.append_text_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost401ApplicationJSON])
                res.append_text_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost500ApplicationJSON])
                res.append_text_using_post_500_application_json_object = out

        return res

    
    
    def check_token_using_get(self) -> operations.CheckTokenUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/checkToken"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckTokenUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet200ApplicationJSON])
                res.check_token_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet400ApplicationJSON])
                res.check_token_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet401ApplicationJSON])
                res.check_token_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet500ApplicationJSON])
                res.check_token_using_get_500_application_json_object = out

        return res

    
    
    def check_token_using_post(self) -> operations.CheckTokenUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/checkToken"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckTokenUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost200ApplicationJSON])
                res.check_token_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost400ApplicationJSON])
                res.check_token_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost401ApplicationJSON])
                res.check_token_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost500ApplicationJSON])
                res.check_token_using_post_500_application_json_object = out

        return res

    
    
    def copy_pad_using_get(self, request: operations.CopyPadUsingGetRequest) -> operations.CopyPadUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/copyPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet200ApplicationJSON])
                res.copy_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet400ApplicationJSON])
                res.copy_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet401ApplicationJSON])
                res.copy_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet500ApplicationJSON])
                res.copy_pad_using_get_500_application_json_object = out

        return res

    
    
    def copy_pad_using_post(self, request: operations.CopyPadUsingPostRequest) -> operations.CopyPadUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/copyPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost200ApplicationJSON])
                res.copy_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost400ApplicationJSON])
                res.copy_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost401ApplicationJSON])
                res.copy_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost500ApplicationJSON])
                res.copy_pad_using_post_500_application_json_object = out

        return res

    
    
    def copy_pad_without_history_using_get(self, request: operations.CopyPadWithoutHistoryUsingGetRequest) -> operations.CopyPadWithoutHistoryUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/copyPadWithoutHistory"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadWithoutHistoryUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet200ApplicationJSON])
                res.copy_pad_without_history_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet400ApplicationJSON])
                res.copy_pad_without_history_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet401ApplicationJSON])
                res.copy_pad_without_history_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet500ApplicationJSON])
                res.copy_pad_without_history_using_get_500_application_json_object = out

        return res

    
    
    def copy_pad_without_history_using_post(self, request: operations.CopyPadWithoutHistoryUsingPostRequest) -> operations.CopyPadWithoutHistoryUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/copyPadWithoutHistory"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadWithoutHistoryUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost200ApplicationJSON])
                res.copy_pad_without_history_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost400ApplicationJSON])
                res.copy_pad_without_history_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost401ApplicationJSON])
                res.copy_pad_without_history_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost500ApplicationJSON])
                res.copy_pad_without_history_using_post_500_application_json_object = out

        return res

    
    
    def create_author_if_not_exists_for_using_get(self, request: operations.CreateAuthorIfNotExistsForUsingGetRequest) -> operations.CreateAuthorIfNotExistsForUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createAuthorIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorIfNotExistsForUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet200ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet400ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet401ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet500ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_500_application_json_object = out

        return res

    
    
    def create_author_if_not_exists_for_using_post(self, request: operations.CreateAuthorIfNotExistsForUsingPostRequest) -> operations.CreateAuthorIfNotExistsForUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createAuthorIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorIfNotExistsForUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost200ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost400ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost401ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost500ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_500_application_json_object = out

        return res

    
    
    def create_author_using_get(self, request: operations.CreateAuthorUsingGetRequest) -> operations.CreateAuthorUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet200ApplicationJSON])
                res.create_author_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet400ApplicationJSON])
                res.create_author_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet401ApplicationJSON])
                res.create_author_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet500ApplicationJSON])
                res.create_author_using_get_500_application_json_object = out

        return res

    
    
    def create_author_using_post(self, request: operations.CreateAuthorUsingPostRequest) -> operations.CreateAuthorUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost200ApplicationJSON])
                res.create_author_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost400ApplicationJSON])
                res.create_author_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost401ApplicationJSON])
                res.create_author_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost500ApplicationJSON])
                res.create_author_using_post_500_application_json_object = out

        return res

    
    
    def create_diff_html_using_get(self, request: operations.CreateDiffHTMLUsingGetRequest) -> operations.CreateDiffHTMLUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createDiffHTML"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDiffHTMLUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet200ApplicationJSON])
                res.create_diff_html_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet400ApplicationJSON])
                res.create_diff_html_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet401ApplicationJSON])
                res.create_diff_html_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet500ApplicationJSON])
                res.create_diff_html_using_get_500_application_json_object = out

        return res

    
    
    def create_diff_html_using_post(self, request: operations.CreateDiffHTMLUsingPostRequest) -> operations.CreateDiffHTMLUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createDiffHTML"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDiffHTMLUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost200ApplicationJSON])
                res.create_diff_html_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost400ApplicationJSON])
                res.create_diff_html_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost401ApplicationJSON])
                res.create_diff_html_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost500ApplicationJSON])
                res.create_diff_html_using_post_500_application_json_object = out

        return res

    
    
    def create_group_if_not_exists_for_using_get(self, request: operations.CreateGroupIfNotExistsForUsingGetRequest) -> operations.CreateGroupIfNotExistsForUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createGroupIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupIfNotExistsForUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet200ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet400ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet401ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingGet500ApplicationJSON])
                res.create_group_if_not_exists_for_using_get_500_application_json_object = out

        return res

    
    
    def create_group_if_not_exists_for_using_post(self, request: operations.CreateGroupIfNotExistsForUsingPostRequest) -> operations.CreateGroupIfNotExistsForUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createGroupIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupIfNotExistsForUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost200ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost400ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost401ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupIfNotExistsForUsingPost500ApplicationJSON])
                res.create_group_if_not_exists_for_using_post_500_application_json_object = out

        return res

    
    
    def create_group_pad_using_get(self, request: operations.CreateGroupPadUsingGetRequest) -> operations.CreateGroupPadUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createGroupPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupPadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet200ApplicationJSON])
                res.create_group_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet400ApplicationJSON])
                res.create_group_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet401ApplicationJSON])
                res.create_group_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingGet500ApplicationJSON])
                res.create_group_pad_using_get_500_application_json_object = out

        return res

    
    
    def create_group_pad_using_post(self, request: operations.CreateGroupPadUsingPostRequest) -> operations.CreateGroupPadUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createGroupPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupPadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost200ApplicationJSON])
                res.create_group_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost400ApplicationJSON])
                res.create_group_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost401ApplicationJSON])
                res.create_group_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupPadUsingPost500ApplicationJSON])
                res.create_group_pad_using_post_500_application_json_object = out

        return res

    
    
    def create_group_using_get(self) -> operations.CreateGroupUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createGroup"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet200ApplicationJSON])
                res.create_group_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet400ApplicationJSON])
                res.create_group_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet401ApplicationJSON])
                res.create_group_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingGet500ApplicationJSON])
                res.create_group_using_get_500_application_json_object = out

        return res

    
    
    def create_group_using_post(self) -> operations.CreateGroupUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createGroup"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost200ApplicationJSON])
                res.create_group_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost400ApplicationJSON])
                res.create_group_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost401ApplicationJSON])
                res.create_group_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateGroupUsingPost500ApplicationJSON])
                res.create_group_using_post_500_application_json_object = out

        return res

    
    
    def create_pad_using_get(self, request: operations.CreatePadUsingGetRequest) -> operations.CreatePadUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet200ApplicationJSON])
                res.create_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet400ApplicationJSON])
                res.create_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet401ApplicationJSON])
                res.create_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet500ApplicationJSON])
                res.create_pad_using_get_500_application_json_object = out

        return res

    
    
    def create_pad_using_post(self, request: operations.CreatePadUsingPostRequest) -> operations.CreatePadUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost200ApplicationJSON])
                res.create_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost400ApplicationJSON])
                res.create_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost401ApplicationJSON])
                res.create_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost500ApplicationJSON])
                res.create_pad_using_post_500_application_json_object = out

        return res

    
    
    def create_session_using_get(self, request: operations.CreateSessionUsingGetRequest) -> operations.CreateSessionUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createSession"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSessionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet200ApplicationJSON])
                res.create_session_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet400ApplicationJSON])
                res.create_session_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet401ApplicationJSON])
                res.create_session_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet500ApplicationJSON])
                res.create_session_using_get_500_application_json_object = out

        return res

    
    
    def create_session_using_post(self, request: operations.CreateSessionUsingPostRequest) -> operations.CreateSessionUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/createSession"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSessionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost200ApplicationJSON])
                res.create_session_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost400ApplicationJSON])
                res.create_session_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost401ApplicationJSON])
                res.create_session_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost500ApplicationJSON])
                res.create_session_using_post_500_application_json_object = out

        return res

    
    
    def delete_group_using_get(self, request: operations.DeleteGroupUsingGetRequest) -> operations.DeleteGroupUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deleteGroup"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet200ApplicationJSON])
                res.delete_group_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet400ApplicationJSON])
                res.delete_group_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet401ApplicationJSON])
                res.delete_group_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingGet500ApplicationJSON])
                res.delete_group_using_get_500_application_json_object = out

        return res

    
    
    def delete_group_using_post(self, request: operations.DeleteGroupUsingPostRequest) -> operations.DeleteGroupUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deleteGroup"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost200ApplicationJSON])
                res.delete_group_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost400ApplicationJSON])
                res.delete_group_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost401ApplicationJSON])
                res.delete_group_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGroupUsingPost500ApplicationJSON])
                res.delete_group_using_post_500_application_json_object = out

        return res

    
    
    def delete_pad_using_get(self, request: operations.DeletePadUsingGetRequest) -> operations.DeletePadUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deletePad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet200ApplicationJSON])
                res.delete_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet400ApplicationJSON])
                res.delete_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet401ApplicationJSON])
                res.delete_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet500ApplicationJSON])
                res.delete_pad_using_get_500_application_json_object = out

        return res

    
    
    def delete_pad_using_post(self, request: operations.DeletePadUsingPostRequest) -> operations.DeletePadUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deletePad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost200ApplicationJSON])
                res.delete_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost400ApplicationJSON])
                res.delete_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost401ApplicationJSON])
                res.delete_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost500ApplicationJSON])
                res.delete_pad_using_post_500_application_json_object = out

        return res

    
    
    def delete_session_using_get(self, request: operations.DeleteSessionUsingGetRequest) -> operations.DeleteSessionUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deleteSession"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSessionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet200ApplicationJSON])
                res.delete_session_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet400ApplicationJSON])
                res.delete_session_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet401ApplicationJSON])
                res.delete_session_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet500ApplicationJSON])
                res.delete_session_using_get_500_application_json_object = out

        return res

    
    
    def delete_session_using_post(self, request: operations.DeleteSessionUsingPostRequest) -> operations.DeleteSessionUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deleteSession"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSessionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost200ApplicationJSON])
                res.delete_session_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost400ApplicationJSON])
                res.delete_session_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost401ApplicationJSON])
                res.delete_session_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost500ApplicationJSON])
                res.delete_session_using_post_500_application_json_object = out

        return res

    
    
    def get_attribute_pool_using_get(self, request: operations.GetAttributePoolUsingGetRequest) -> operations.GetAttributePoolUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getAttributePool"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributePoolUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet200ApplicationJSON])
                res.get_attribute_pool_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet400ApplicationJSON])
                res.get_attribute_pool_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet401ApplicationJSON])
                res.get_attribute_pool_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet500ApplicationJSON])
                res.get_attribute_pool_using_get_500_application_json_object = out

        return res

    
    
    def get_attribute_pool_using_post(self, request: operations.GetAttributePoolUsingPostRequest) -> operations.GetAttributePoolUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getAttributePool"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributePoolUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost200ApplicationJSON])
                res.get_attribute_pool_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost400ApplicationJSON])
                res.get_attribute_pool_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost401ApplicationJSON])
                res.get_attribute_pool_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost500ApplicationJSON])
                res.get_attribute_pool_using_post_500_application_json_object = out

        return res

    
    
    def get_author_name_using_get(self, request: operations.GetAuthorNameUsingGetRequest) -> operations.GetAuthorNameUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getAuthorName"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorNameUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet200ApplicationJSON])
                res.get_author_name_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet400ApplicationJSON])
                res.get_author_name_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet401ApplicationJSON])
                res.get_author_name_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet500ApplicationJSON])
                res.get_author_name_using_get_500_application_json_object = out

        return res

    
    
    def get_author_name_using_post(self, request: operations.GetAuthorNameUsingPostRequest) -> operations.GetAuthorNameUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getAuthorName"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorNameUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost200ApplicationJSON])
                res.get_author_name_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost400ApplicationJSON])
                res.get_author_name_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost401ApplicationJSON])
                res.get_author_name_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost500ApplicationJSON])
                res.get_author_name_using_post_500_application_json_object = out

        return res

    
    
    def get_chat_head_using_get(self, request: operations.GetChatHeadUsingGetRequest) -> operations.GetChatHeadUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getChatHead"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHeadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet200ApplicationJSON])
                res.get_chat_head_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet400ApplicationJSON])
                res.get_chat_head_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet401ApplicationJSON])
                res.get_chat_head_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet500ApplicationJSON])
                res.get_chat_head_using_get_500_application_json_object = out

        return res

    
    
    def get_chat_head_using_post(self, request: operations.GetChatHeadUsingPostRequest) -> operations.GetChatHeadUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getChatHead"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHeadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost200ApplicationJSON])
                res.get_chat_head_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost400ApplicationJSON])
                res.get_chat_head_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost401ApplicationJSON])
                res.get_chat_head_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost500ApplicationJSON])
                res.get_chat_head_using_post_500_application_json_object = out

        return res

    
    
    def get_chat_history_using_get(self, request: operations.GetChatHistoryUsingGetRequest) -> operations.GetChatHistoryUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getChatHistory"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHistoryUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet200ApplicationJSON])
                res.get_chat_history_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet400ApplicationJSON])
                res.get_chat_history_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet401ApplicationJSON])
                res.get_chat_history_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet500ApplicationJSON])
                res.get_chat_history_using_get_500_application_json_object = out

        return res

    
    
    def get_chat_history_using_post(self, request: operations.GetChatHistoryUsingPostRequest) -> operations.GetChatHistoryUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getChatHistory"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHistoryUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost200ApplicationJSON])
                res.get_chat_history_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost400ApplicationJSON])
                res.get_chat_history_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost401ApplicationJSON])
                res.get_chat_history_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost500ApplicationJSON])
                res.get_chat_history_using_post_500_application_json_object = out

        return res

    
    
    def get_html_using_get(self, request: operations.GetHTMLUsingGetRequest) -> operations.GetHTMLUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getHTML"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHTMLUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet200ApplicationJSON])
                res.get_html_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet400ApplicationJSON])
                res.get_html_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet401ApplicationJSON])
                res.get_html_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet500ApplicationJSON])
                res.get_html_using_get_500_application_json_object = out

        return res

    
    
    def get_html_using_post(self, request: operations.GetHTMLUsingPostRequest) -> operations.GetHTMLUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getHTML"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHTMLUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost200ApplicationJSON])
                res.get_html_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost400ApplicationJSON])
                res.get_html_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost401ApplicationJSON])
                res.get_html_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost500ApplicationJSON])
                res.get_html_using_post_500_application_json_object = out

        return res

    
    
    def get_last_edited_using_get(self, request: operations.GetLastEditedUsingGetRequest) -> operations.GetLastEditedUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getLastEdited"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastEditedUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet200ApplicationJSON])
                res.get_last_edited_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet400ApplicationJSON])
                res.get_last_edited_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet401ApplicationJSON])
                res.get_last_edited_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet500ApplicationJSON])
                res.get_last_edited_using_get_500_application_json_object = out

        return res

    
    
    def get_last_edited_using_post(self, request: operations.GetLastEditedUsingPostRequest) -> operations.GetLastEditedUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getLastEdited"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastEditedUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost200ApplicationJSON])
                res.get_last_edited_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost400ApplicationJSON])
                res.get_last_edited_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost401ApplicationJSON])
                res.get_last_edited_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost500ApplicationJSON])
                res.get_last_edited_using_post_500_application_json_object = out

        return res

    
    
    def get_pad_id_using_get(self, request: operations.GetPadIDUsingGetRequest) -> operations.GetPadIDUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getPadID"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPadIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet200ApplicationJSON])
                res.get_pad_id_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet400ApplicationJSON])
                res.get_pad_id_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet401ApplicationJSON])
                res.get_pad_id_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet500ApplicationJSON])
                res.get_pad_id_using_get_500_application_json_object = out

        return res

    
    
    def get_pad_id_using_post(self, request: operations.GetPadIDUsingPostRequest) -> operations.GetPadIDUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getPadID"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPadIDUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost200ApplicationJSON])
                res.get_pad_id_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost400ApplicationJSON])
                res.get_pad_id_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost401ApplicationJSON])
                res.get_pad_id_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost500ApplicationJSON])
                res.get_pad_id_using_post_500_application_json_object = out

        return res

    
    
    def get_public_status_using_get(self, request: operations.GetPublicStatusUsingGetRequest) -> operations.GetPublicStatusUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicStatusUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet200ApplicationJSON])
                res.get_public_status_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet400ApplicationJSON])
                res.get_public_status_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet401ApplicationJSON])
                res.get_public_status_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet500ApplicationJSON])
                res.get_public_status_using_get_500_application_json_object = out

        return res

    
    
    def get_public_status_using_post(self, request: operations.GetPublicStatusUsingPostRequest) -> operations.GetPublicStatusUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicStatusUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost200ApplicationJSON])
                res.get_public_status_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost400ApplicationJSON])
                res.get_public_status_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost401ApplicationJSON])
                res.get_public_status_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost500ApplicationJSON])
                res.get_public_status_using_post_500_application_json_object = out

        return res

    
    
    def get_read_only_id_using_get(self, request: operations.GetReadOnlyIDUsingGetRequest) -> operations.GetReadOnlyIDUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getReadOnlyID"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadOnlyIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet200ApplicationJSON])
                res.get_read_only_id_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet400ApplicationJSON])
                res.get_read_only_id_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet401ApplicationJSON])
                res.get_read_only_id_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet500ApplicationJSON])
                res.get_read_only_id_using_get_500_application_json_object = out

        return res

    
    
    def get_read_only_id_using_post(self, request: operations.GetReadOnlyIDUsingPostRequest) -> operations.GetReadOnlyIDUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getReadOnlyID"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadOnlyIDUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost200ApplicationJSON])
                res.get_read_only_id_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost400ApplicationJSON])
                res.get_read_only_id_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost401ApplicationJSON])
                res.get_read_only_id_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost500ApplicationJSON])
                res.get_read_only_id_using_post_500_application_json_object = out

        return res

    
    
    def get_revision_changeset_using_get(self, request: operations.GetRevisionChangesetUsingGetRequest) -> operations.GetRevisionChangesetUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getRevisionChangeset"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionChangesetUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet200ApplicationJSON])
                res.get_revision_changeset_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet400ApplicationJSON])
                res.get_revision_changeset_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet401ApplicationJSON])
                res.get_revision_changeset_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet500ApplicationJSON])
                res.get_revision_changeset_using_get_500_application_json_object = out

        return res

    
    
    def get_revision_changeset_using_post(self, request: operations.GetRevisionChangesetUsingPostRequest) -> operations.GetRevisionChangesetUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getRevisionChangeset"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionChangesetUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost200ApplicationJSON])
                res.get_revision_changeset_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost400ApplicationJSON])
                res.get_revision_changeset_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost401ApplicationJSON])
                res.get_revision_changeset_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost500ApplicationJSON])
                res.get_revision_changeset_using_post_500_application_json_object = out

        return res

    
    
    def get_revisions_count_using_get(self, request: operations.GetRevisionsCountUsingGetRequest) -> operations.GetRevisionsCountUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet200ApplicationJSON])
                res.get_revisions_count_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet400ApplicationJSON])
                res.get_revisions_count_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet401ApplicationJSON])
                res.get_revisions_count_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet500ApplicationJSON])
                res.get_revisions_count_using_get_500_application_json_object = out

        return res

    
    
    def get_revisions_count_using_post(self, request: operations.GetRevisionsCountUsingPostRequest) -> operations.GetRevisionsCountUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionsCountUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost200ApplicationJSON])
                res.get_revisions_count_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost400ApplicationJSON])
                res.get_revisions_count_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost401ApplicationJSON])
                res.get_revisions_count_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost500ApplicationJSON])
                res.get_revisions_count_using_post_500_application_json_object = out

        return res

    
    
    def get_saved_revisions_count_using_get(self, request: operations.GetSavedRevisionsCountUsingGetRequest) -> operations.GetSavedRevisionsCountUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getSavedRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedRevisionsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet200ApplicationJSON])
                res.get_saved_revisions_count_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet400ApplicationJSON])
                res.get_saved_revisions_count_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet401ApplicationJSON])
                res.get_saved_revisions_count_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet500ApplicationJSON])
                res.get_saved_revisions_count_using_get_500_application_json_object = out

        return res

    
    
    def get_saved_revisions_count_using_post(self, request: operations.GetSavedRevisionsCountUsingPostRequest) -> operations.GetSavedRevisionsCountUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getSavedRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedRevisionsCountUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost200ApplicationJSON])
                res.get_saved_revisions_count_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost400ApplicationJSON])
                res.get_saved_revisions_count_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost401ApplicationJSON])
                res.get_saved_revisions_count_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost500ApplicationJSON])
                res.get_saved_revisions_count_using_post_500_application_json_object = out

        return res

    
    
    def get_session_info_using_get(self, request: operations.GetSessionInfoUsingGetRequest) -> operations.GetSessionInfoUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getSessionInfo"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionInfoUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet200ApplicationJSON])
                res.get_session_info_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet400ApplicationJSON])
                res.get_session_info_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet401ApplicationJSON])
                res.get_session_info_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet500ApplicationJSON])
                res.get_session_info_using_get_500_application_json_object = out

        return res

    
    
    def get_session_info_using_post(self, request: operations.GetSessionInfoUsingPostRequest) -> operations.GetSessionInfoUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getSessionInfo"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionInfoUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost200ApplicationJSON])
                res.get_session_info_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost400ApplicationJSON])
                res.get_session_info_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost401ApplicationJSON])
                res.get_session_info_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost500ApplicationJSON])
                res.get_session_info_using_post_500_application_json_object = out

        return res

    
    
    def get_stats_using_get(self) -> operations.GetStatsUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getStats"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet200ApplicationJSON])
                res.get_stats_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet400ApplicationJSON])
                res.get_stats_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet401ApplicationJSON])
                res.get_stats_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet500ApplicationJSON])
                res.get_stats_using_get_500_application_json_object = out

        return res

    
    
    def get_stats_using_post(self) -> operations.GetStatsUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getStats"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost200ApplicationJSON])
                res.get_stats_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost400ApplicationJSON])
                res.get_stats_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost401ApplicationJSON])
                res.get_stats_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost500ApplicationJSON])
                res.get_stats_using_post_500_application_json_object = out

        return res

    
    
    def get_text_using_get(self, request: operations.GetTextUsingGetRequest) -> operations.GetTextUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getText"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet200ApplicationJSON])
                res.get_text_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet400ApplicationJSON])
                res.get_text_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet401ApplicationJSON])
                res.get_text_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet500ApplicationJSON])
                res.get_text_using_get_500_application_json_object = out

        return res

    
    
    def get_text_using_post(self, request: operations.GetTextUsingPostRequest) -> operations.GetTextUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/getText"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost200ApplicationJSON])
                res.get_text_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost400ApplicationJSON])
                res.get_text_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost401ApplicationJSON])
                res.get_text_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost500ApplicationJSON])
                res.get_text_using_post_500_application_json_object = out

        return res

    
    
    def list_all_groups_using_get(self) -> operations.ListAllGroupsUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listAllGroups"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllGroupsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet200ApplicationJSON])
                res.list_all_groups_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet400ApplicationJSON])
                res.list_all_groups_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet401ApplicationJSON])
                res.list_all_groups_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingGet500ApplicationJSON])
                res.list_all_groups_using_get_500_application_json_object = out

        return res

    
    
    def list_all_groups_using_post(self) -> operations.ListAllGroupsUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listAllGroups"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllGroupsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost200ApplicationJSON])
                res.list_all_groups_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost400ApplicationJSON])
                res.list_all_groups_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost401ApplicationJSON])
                res.list_all_groups_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllGroupsUsingPost500ApplicationJSON])
                res.list_all_groups_using_post_500_application_json_object = out

        return res

    
    
    def list_all_pads_using_get(self) -> operations.ListAllPadsUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listAllPads"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllPadsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet200ApplicationJSON])
                res.list_all_pads_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet400ApplicationJSON])
                res.list_all_pads_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet401ApplicationJSON])
                res.list_all_pads_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet500ApplicationJSON])
                res.list_all_pads_using_get_500_application_json_object = out

        return res

    
    
    def list_all_pads_using_post(self) -> operations.ListAllPadsUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listAllPads"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllPadsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost200ApplicationJSON])
                res.list_all_pads_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost400ApplicationJSON])
                res.list_all_pads_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost401ApplicationJSON])
                res.list_all_pads_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost500ApplicationJSON])
                res.list_all_pads_using_post_500_application_json_object = out

        return res

    
    
    def list_authors_of_pad_using_get(self, request: operations.ListAuthorsOfPadUsingGetRequest) -> operations.ListAuthorsOfPadUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listAuthorsOfPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAuthorsOfPadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet200ApplicationJSON])
                res.list_authors_of_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet400ApplicationJSON])
                res.list_authors_of_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet401ApplicationJSON])
                res.list_authors_of_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet500ApplicationJSON])
                res.list_authors_of_pad_using_get_500_application_json_object = out

        return res

    
    
    def list_authors_of_pad_using_post(self, request: operations.ListAuthorsOfPadUsingPostRequest) -> operations.ListAuthorsOfPadUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listAuthorsOfPad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAuthorsOfPadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost200ApplicationJSON])
                res.list_authors_of_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost400ApplicationJSON])
                res.list_authors_of_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost401ApplicationJSON])
                res.list_authors_of_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost500ApplicationJSON])
                res.list_authors_of_pad_using_post_500_application_json_object = out

        return res

    
    
    def list_pads_of_author_using_get(self, request: operations.ListPadsOfAuthorUsingGetRequest) -> operations.ListPadsOfAuthorUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listPadsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsOfAuthorUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet200ApplicationJSON])
                res.list_pads_of_author_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet400ApplicationJSON])
                res.list_pads_of_author_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet401ApplicationJSON])
                res.list_pads_of_author_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet500ApplicationJSON])
                res.list_pads_of_author_using_get_500_application_json_object = out

        return res

    
    
    def list_pads_of_author_using_post(self, request: operations.ListPadsOfAuthorUsingPostRequest) -> operations.ListPadsOfAuthorUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listPadsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsOfAuthorUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost200ApplicationJSON])
                res.list_pads_of_author_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost400ApplicationJSON])
                res.list_pads_of_author_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost401ApplicationJSON])
                res.list_pads_of_author_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost500ApplicationJSON])
                res.list_pads_of_author_using_post_500_application_json_object = out

        return res

    
    
    def list_pads_using_get(self, request: operations.ListPadsUsingGetRequest) -> operations.ListPadsUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listPads"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet200ApplicationJSON])
                res.list_pads_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet400ApplicationJSON])
                res.list_pads_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet401ApplicationJSON])
                res.list_pads_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingGet500ApplicationJSON])
                res.list_pads_using_get_500_application_json_object = out

        return res

    
    
    def list_pads_using_post(self, request: operations.ListPadsUsingPostRequest) -> operations.ListPadsUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listPads"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost200ApplicationJSON])
                res.list_pads_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost400ApplicationJSON])
                res.list_pads_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost401ApplicationJSON])
                res.list_pads_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsUsingPost500ApplicationJSON])
                res.list_pads_using_post_500_application_json_object = out

        return res

    
    
    def list_saved_revisions_using_get(self, request: operations.ListSavedRevisionsUsingGetRequest) -> operations.ListSavedRevisionsUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listSavedRevisions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSavedRevisionsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet200ApplicationJSON])
                res.list_saved_revisions_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet400ApplicationJSON])
                res.list_saved_revisions_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet401ApplicationJSON])
                res.list_saved_revisions_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet500ApplicationJSON])
                res.list_saved_revisions_using_get_500_application_json_object = out

        return res

    
    
    def list_saved_revisions_using_post(self, request: operations.ListSavedRevisionsUsingPostRequest) -> operations.ListSavedRevisionsUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listSavedRevisions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSavedRevisionsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost200ApplicationJSON])
                res.list_saved_revisions_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost400ApplicationJSON])
                res.list_saved_revisions_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost401ApplicationJSON])
                res.list_saved_revisions_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost500ApplicationJSON])
                res.list_saved_revisions_using_post_500_application_json_object = out

        return res

    
    
    def list_sessions_of_author_using_get(self, request: operations.ListSessionsOfAuthorUsingGetRequest) -> operations.ListSessionsOfAuthorUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listSessionsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfAuthorUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet200ApplicationJSON])
                res.list_sessions_of_author_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet400ApplicationJSON])
                res.list_sessions_of_author_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet401ApplicationJSON])
                res.list_sessions_of_author_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet500ApplicationJSON])
                res.list_sessions_of_author_using_get_500_application_json_object = out

        return res

    
    
    def list_sessions_of_author_using_post(self, request: operations.ListSessionsOfAuthorUsingPostRequest) -> operations.ListSessionsOfAuthorUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listSessionsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfAuthorUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost200ApplicationJSON])
                res.list_sessions_of_author_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost400ApplicationJSON])
                res.list_sessions_of_author_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost401ApplicationJSON])
                res.list_sessions_of_author_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost500ApplicationJSON])
                res.list_sessions_of_author_using_post_500_application_json_object = out

        return res

    
    
    def list_sessions_of_group_using_get(self, request: operations.ListSessionsOfGroupUsingGetRequest) -> operations.ListSessionsOfGroupUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listSessionsOfGroup"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfGroupUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet200ApplicationJSON])
                res.list_sessions_of_group_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet400ApplicationJSON])
                res.list_sessions_of_group_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet401ApplicationJSON])
                res.list_sessions_of_group_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingGet500ApplicationJSON])
                res.list_sessions_of_group_using_get_500_application_json_object = out

        return res

    
    
    def list_sessions_of_group_using_post(self, request: operations.ListSessionsOfGroupUsingPostRequest) -> operations.ListSessionsOfGroupUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/listSessionsOfGroup"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfGroupUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost200ApplicationJSON])
                res.list_sessions_of_group_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost400ApplicationJSON])
                res.list_sessions_of_group_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost401ApplicationJSON])
                res.list_sessions_of_group_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfGroupUsingPost500ApplicationJSON])
                res.list_sessions_of_group_using_post_500_application_json_object = out

        return res

    
    
    def move_pad_using_get(self, request: operations.MovePadUsingGetRequest) -> operations.MovePadUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/movePad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MovePadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet200ApplicationJSON])
                res.move_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet400ApplicationJSON])
                res.move_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet401ApplicationJSON])
                res.move_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet500ApplicationJSON])
                res.move_pad_using_get_500_application_json_object = out

        return res

    
    
    def move_pad_using_post(self, request: operations.MovePadUsingPostRequest) -> operations.MovePadUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/movePad"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MovePadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost200ApplicationJSON])
                res.move_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost400ApplicationJSON])
                res.move_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost401ApplicationJSON])
                res.move_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost500ApplicationJSON])
                res.move_pad_using_post_500_application_json_object = out

        return res

    
    
    def pad_users_count_using_get(self, request: operations.PadUsersCountUsingGetRequest) -> operations.PadUsersCountUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/padUsersCount"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet200ApplicationJSON])
                res.pad_users_count_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet400ApplicationJSON])
                res.pad_users_count_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet401ApplicationJSON])
                res.pad_users_count_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet500ApplicationJSON])
                res.pad_users_count_using_get_500_application_json_object = out

        return res

    
    
    def pad_users_count_using_post(self, request: operations.PadUsersCountUsingPostRequest) -> operations.PadUsersCountUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/padUsersCount"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersCountUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost200ApplicationJSON])
                res.pad_users_count_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost400ApplicationJSON])
                res.pad_users_count_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost401ApplicationJSON])
                res.pad_users_count_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost500ApplicationJSON])
                res.pad_users_count_using_post_500_application_json_object = out

        return res

    
    
    def pad_users_using_get(self, request: operations.PadUsersUsingGetRequest) -> operations.PadUsersUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/padUsers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet200ApplicationJSON])
                res.pad_users_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet400ApplicationJSON])
                res.pad_users_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet401ApplicationJSON])
                res.pad_users_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet500ApplicationJSON])
                res.pad_users_using_get_500_application_json_object = out

        return res

    
    
    def pad_users_using_post(self, request: operations.PadUsersUsingPostRequest) -> operations.PadUsersUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/padUsers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost200ApplicationJSON])
                res.pad_users_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost400ApplicationJSON])
                res.pad_users_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost401ApplicationJSON])
                res.pad_users_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost500ApplicationJSON])
                res.pad_users_using_post_500_application_json_object = out

        return res

    
    
    def restore_revision_using_get(self, request: operations.RestoreRevisionUsingGetRequest) -> operations.RestoreRevisionUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/restoreRevision"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RestoreRevisionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet200ApplicationJSON])
                res.restore_revision_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet400ApplicationJSON])
                res.restore_revision_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet401ApplicationJSON])
                res.restore_revision_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet500ApplicationJSON])
                res.restore_revision_using_get_500_application_json_object = out

        return res

    
    
    def restore_revision_using_post(self, request: operations.RestoreRevisionUsingPostRequest) -> operations.RestoreRevisionUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/restoreRevision"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RestoreRevisionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost200ApplicationJSON])
                res.restore_revision_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost400ApplicationJSON])
                res.restore_revision_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost401ApplicationJSON])
                res.restore_revision_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost500ApplicationJSON])
                res.restore_revision_using_post_500_application_json_object = out

        return res

    
    
    def save_revision_using_get(self, request: operations.SaveRevisionUsingGetRequest) -> operations.SaveRevisionUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/saveRevision"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveRevisionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet200ApplicationJSON])
                res.save_revision_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet400ApplicationJSON])
                res.save_revision_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet401ApplicationJSON])
                res.save_revision_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet500ApplicationJSON])
                res.save_revision_using_get_500_application_json_object = out

        return res

    
    
    def save_revision_using_post(self, request: operations.SaveRevisionUsingPostRequest) -> operations.SaveRevisionUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/saveRevision"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveRevisionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost200ApplicationJSON])
                res.save_revision_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost400ApplicationJSON])
                res.save_revision_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost401ApplicationJSON])
                res.save_revision_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost500ApplicationJSON])
                res.save_revision_using_post_500_application_json_object = out

        return res

    
    
    def send_clients_message_using_get(self, request: operations.SendClientsMessageUsingGetRequest) -> operations.SendClientsMessageUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/sendClientsMessage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SendClientsMessageUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet200ApplicationJSON])
                res.send_clients_message_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet400ApplicationJSON])
                res.send_clients_message_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet401ApplicationJSON])
                res.send_clients_message_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet500ApplicationJSON])
                res.send_clients_message_using_get_500_application_json_object = out

        return res

    
    
    def send_clients_message_using_post(self, request: operations.SendClientsMessageUsingPostRequest) -> operations.SendClientsMessageUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/sendClientsMessage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SendClientsMessageUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost200ApplicationJSON])
                res.send_clients_message_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost400ApplicationJSON])
                res.send_clients_message_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost401ApplicationJSON])
                res.send_clients_message_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost500ApplicationJSON])
                res.send_clients_message_using_post_500_application_json_object = out

        return res

    
    
    def set_html_using_get(self, request: operations.SetHTMLUsingGetRequest) -> operations.SetHTMLUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setHTML"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetHTMLUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet200ApplicationJSON])
                res.set_html_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet400ApplicationJSON])
                res.set_html_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet401ApplicationJSON])
                res.set_html_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet500ApplicationJSON])
                res.set_html_using_get_500_application_json_object = out

        return res

    
    
    def set_html_using_post(self, request: operations.SetHTMLUsingPostRequest) -> operations.SetHTMLUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setHTML"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetHTMLUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost200ApplicationJSON])
                res.set_html_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost400ApplicationJSON])
                res.set_html_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost401ApplicationJSON])
                res.set_html_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost500ApplicationJSON])
                res.set_html_using_post_500_application_json_object = out

        return res

    
    
    def set_public_status_using_get(self, request: operations.SetPublicStatusUsingGetRequest) -> operations.SetPublicStatusUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPublicStatusUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet200ApplicationJSON])
                res.set_public_status_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet400ApplicationJSON])
                res.set_public_status_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet401ApplicationJSON])
                res.set_public_status_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet500ApplicationJSON])
                res.set_public_status_using_get_500_application_json_object = out

        return res

    
    
    def set_public_status_using_post(self, request: operations.SetPublicStatusUsingPostRequest) -> operations.SetPublicStatusUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPublicStatusUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost200ApplicationJSON])
                res.set_public_status_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost400ApplicationJSON])
                res.set_public_status_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost401ApplicationJSON])
                res.set_public_status_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost500ApplicationJSON])
                res.set_public_status_using_post_500_application_json_object = out

        return res

    
    
    def set_text_using_get(self, request: operations.SetTextUsingGetRequest) -> operations.SetTextUsingGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setText"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTextUsingGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet200ApplicationJSON])
                res.set_text_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet400ApplicationJSON])
                res.set_text_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet401ApplicationJSON])
                res.set_text_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet500ApplicationJSON])
                res.set_text_using_get_500_application_json_object = out

        return res

    
    
    def set_text_using_post(self, request: operations.SetTextUsingPostRequest) -> operations.SetTextUsingPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setText"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTextUsingPostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost200ApplicationJSON])
                res.set_text_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost400ApplicationJSON])
                res.set_text_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost401ApplicationJSON])
                res.set_text_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost500ApplicationJSON])
                res.set_text_using_post_500_application_json_object = out

        return res

    