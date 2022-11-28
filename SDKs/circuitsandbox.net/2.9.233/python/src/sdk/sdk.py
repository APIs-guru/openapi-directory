

import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://circuitsandbox.net/rest/v2",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def add_favorite(self, request: operations.AddFavoriteRequest) -> operations.AddFavoriteResponse:
        r"""Adds a conversation to the favorites
        Adds a conversation to the favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.
        OauthScopes: WRITE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/favorite", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddFavoriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_label(self, request: operations.AddLabelRequest) -> operations.AddLabelResponse:
        r"""Add a user label
        Add a label to the list of user labels
        OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/labels"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.label = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_moderators(self, request: operations.AddModeratorsRequest) -> operations.AddModeratorsResponse:
        r"""Add moderators
        Adds a list of moderators to a conversation
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/moderators", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddModeratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_participant_community(self, request: operations.AddParticipantCommunityRequest) -> operations.AddParticipantCommunityResponse:
        r"""Adds participants to a community
        Adds one or more participants to the given community. This operation can only be performed by a user who is already a member of the community.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/community/{convId}/participants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddParticipantCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_participant_group(self, request: operations.AddParticipantGroupRequest) -> operations.AddParticipantGroupResponse:
        r"""Adds participants to a group conversation
        Adds one or more participants to the given group conversation. This operation can only be performed by a user who is already a member of the conversation.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/group/{convId}/participants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddParticipantGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_participants_to_space(self, request: operations.AddParticipantsToSpaceRequest) -> operations.AddParticipantsToSpaceResponse:
        r"""Add Participant to Space
        Add a participant to a space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/participant", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddParticipantsToSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.participant_add_results = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_presence_web_hook(self, request: operations.AddPresenceWebHookRequest) -> operations.AddPresenceWebHookResponse:
        r"""Registers Presence WebHook registration
        Registers a webHook that has a presence filter with the given URL and userIds. There is a maximum number of userIds allowed
        OauthScopes: READ_USER
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks/presence"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddPresenceWebHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.web_hook = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_recent_space_search(self, request: operations.AddRecentSpaceSearchRequest) -> operations.AddRecentSpaceSearchResponse:
        r"""Add recent search 
        Add recent search of a client to search controller.
        OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/search/add/recent"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddRecentSpaceSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_text_item(self, request: operations.AddTextItemRequest) -> operations.AddTextItemResponse:
        r"""Adds a message to a conversation
        Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation.
        OauthScopes: WRITE_CONVERSATIONS, CREATE_CONVERSATIONS_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTextItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation_item = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_text_item_with_parent(self, request: operations.AddTextItemWithParentRequest) -> operations.AddTextItemWithParentResponse:
        r"""Adds a message to an item
        Adds a message to the existing item. The added message will be a child item of the message with the given itemId.
        OauthScopes: WRITE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/{itemId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTextItemWithParentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation_item = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def add_web_hook(self, request: operations.AddWebHookRequest) -> operations.AddWebHookResponse:
        r"""Registers a WebHook
        Registers the webHook with the given filter and callback URL.
        OauthScopes: READ_CONVERSATIONS, READ_USER
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddWebHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.web_hook = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def archive_conversation(self, request: operations.ArchiveConversationRequest) -> operations.ArchiveConversationResponse:
        r"""Archives conversation
        Archives a conversation by muting it
        OauthScopes: WRITE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/archive", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArchiveConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def assign_label(self, request: operations.AssignLabelRequest) -> operations.AssignLabelResponse:
        r"""Adds a label to a conversation
        Adds a label to a conversation, you can search and organize your conversations based on these labels
        OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/label", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.label = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def assign_labels(self, request: operations.AssignLabelsRequest) -> operations.AssignLabelsResponse:
        r"""Assign labels
        Assign labels to space
        OauthScopes: WRITE_SPACE, ORGANIZE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/labels/assign", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.label_ids = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def cancel_space_search(self, request: operations.CancelSpaceSearchRequest) -> operations.CancelSpaceSearchResponse:
        r"""Cancels a space search of a client.
        Cancels a space search of a client.
        OauthScopes: WRITE_SPACE, MANAGE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/search/cancel/{searchId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelSpaceSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def create_community_conversation(self, request: operations.CreateCommunityConversationRequest) -> operations.CreateCommunityConversationResponse:
        r"""Creates a community conversation
        Creates a community. Communities are open conversations that anyone in a Circuit domain (tenant) can join without having to be added by another user.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/community"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCommunityConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def create_direct_conversation(self, request: operations.CreateDirectConversationRequest) -> operations.CreateDirectConversationResponse:
        r"""Creates a 1-to-1 conversation
        Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/direct"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDirectConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def create_group_conversation(self, request: operations.CreateGroupConversationRequest) -> operations.CreateGroupConversationResponse:
        r"""Creates a group conversation
        Creates a group conversation between three or more users. The authenticated user is directly added to this conversation.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/group"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def create_incoming_webhook(self, request: operations.CreateIncomingWebhookRequest) -> operations.CreateIncomingWebhookResponse:
        r"""Create a new webhook for existing conversation.
        Create a new webhook. Conversation must exist and creater has to be participant.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/incoming/create/{conversationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIncomingWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.incoming_webhook = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def create_reply(self, request: operations.CreateReplyRequest) -> operations.CreateReplyResponse:
        r"""creates a reply to a topic
        creates a reply to a topic
        OauthScopes: WRITE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/topic/{topicId}/reply", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.space_reply = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def create_space(self, request: operations.CreateSpaceRequest) -> operations.CreateSpaceResponse:
        r"""Create a space
        Create a space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.participant_space_wrapper = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def create_space_topic(self, request: operations.CreateSpaceTopicRequest) -> operations.CreateSpaceTopicResponse:
        r"""creates a new space topic
        creates a new space topic
        OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/topic", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSpaceTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.space_topic = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_favorite(self, request: operations.DeleteFavoriteRequest) -> operations.DeleteFavoriteResponse:
        r"""Removes a conversation from favorites
        Removes a conversation from favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.
        OauthScopes: WRITE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/favorite", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFavoriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_incoming_webhook(self, request: operations.DeleteIncomingWebhookRequest) -> operations.DeleteIncomingWebhookResponse:
        r"""Delete an existing webhook
        Delete a new webhook. Webhook must exist
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/incoming/{webhookId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIncomingWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_space(self, request: operations.DeleteSpaceRequest) -> operations.DeleteSpaceResponse:
        r"""Delete a space
        Delete a space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE, DELETE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_space_item(self, request: operations.DeleteSpaceItemRequest) -> operations.DeleteSpaceItemResponse:
        r"""deletes a space item
        deletes a space item
        OauthScopes: WRITE_SPACE, DELETE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/item/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSpaceItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def delete_text_item(self, request: operations.DeleteTextItemRequest) -> operations.DeleteTextItemResponse:
        r"""Deletes a message from a conversation
        Marks a message in the given conversation as deleted. Deleted messages are still part of the conversation, but their content is no more visible. This operation can only be performed on behalf of the message's creator.
        OauthScopes: WRITE_CONVERSATIONS, DELETE_CONVERSATIONS_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTextItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation_item = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def deny_space_acces(self, request: operations.DenySpaceAccesRequest) -> operations.DenySpaceAccesResponse:
        r"""Deny access for a space
        Deny access for a space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/participant/{participantId}/deny", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DenySpaceAccesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def exists_space_name(self, request: operations.ExistsSpaceNameRequest) -> operations.ExistsSpaceNameResponse:
        r"""Space name exists
        Find out if a space name already exists for non-secret spaces.
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/exists/{name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExistsSpaceNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def flag_item(self, request: operations.FlagItemRequest) -> operations.FlagItemResponse:
        r"""Adds a flag to a message in a conversation
        Adds a flag to the given message in the given conversation.
        OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/{itemId}/flag", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FlagItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def flag_space_item(self, request: operations.FlagSpaceItemRequest) -> operations.FlagSpaceItemResponse:
        r"""flag a space item
        flag a space item
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/flag/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FlagSpaceItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_active_sessions(self, request: operations.GetActiveSessionsRequest) -> operations.GetActiveSessionsResponse:
        r"""Gets a list of active sessions
        Gets a list of active RTCsessions
        OauthScopes: CALLS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rtc/sessions"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_community_conversations(self, request: operations.GetCommunityConversationsRequest) -> operations.GetCommunityConversationsResponse:
        r"""Gets a list of communities
        Gets a list of communities. This endpoint can be used to explore the communities the authenticated user could join.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/community"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunityConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversations = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_conversation_items(self, request: operations.GetConversationItemsRequest) -> operations.GetConversationItemsResponse:
        r"""Gets a list of conversation items
        Gets a list of conversation items.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversationItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversation_items = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_conversationby_id(self, request: operations.GetConversationbyIDRequest) -> operations.GetConversationbyIDResponse:
        r"""Gets a conversation
        Gets a conversation based on the given ID.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversationbyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_conversations(self, request: operations.GetConversationsRequest) -> operations.GetConversationsResponse:
        r"""Gets a list of conversations
        Gets a list of conversations and communities the authenticated user participates in.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversations = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_conversations_by_id(self, request: operations.GetConversationsByIDRequest) -> operations.GetConversationsByIDResponse:
        r"""Gets conversations
        Gets conversation based on the given IDs.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/byIds"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversationsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversations = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_conversations_by_label(self, request: operations.GetConversationsByLabelRequest) -> operations.GetConversationsByLabelResponse:
        r"""Returns conversations with a certain label
        Returns conversations with matching labels and paginated 
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/label/{labelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversationsByLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversations_page = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_direct_conversation(self, request: operations.GetDirectConversationRequest) -> operations.GetDirectConversationResponse:
        r"""Checks for a 1-to-1 conversation
        Checks if a 1-to-1 conversation between the authenticated user and the user with the provided userId exists.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/direct"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_directory(self, request: operations.GetDirectoryRequest) -> operations.GetDirectoryResponse:
        r"""Get the directory
        Get the directory by a search query in ordered way
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/directory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.directory_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_favorite_conversations(self, request: operations.GetFavoriteConversationsRequest) -> operations.GetFavoriteConversationsResponse:
        r"""Gets favorite conversations
        Gets the conversationIds which are marked as favorites.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/favorite"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFavoriteConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_flag_item(self, request: operations.GetFlagItemRequest) -> operations.GetFlagItemResponse:
        r"""Gets a list of the flagged messages of a conversation
        Gets a list of all the flagged messages in the given conversation.
        OauthScopes: READ_CONVERSATIONS, ORGANIZE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/flag", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFlagItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversation_items = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_flag_item_conv(self, request: operations.GetFlagItemConvRequest) -> operations.GetFlagItemConvResponse:
        r"""Gets a list of the flagged messages
        Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/messages/flag"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFlagItemConvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_flagged_items(self, request: operations.GetFlaggedItemsRequest) -> operations.GetFlaggedItemsResponse:
        r"""Get flagged items
        Get flagged items
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/flagged"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFlaggedItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.flagged_items_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_incoming_webhook_by_user(self, request: operations.GetIncomingWebhookByUserRequest) -> operations.GetIncomingWebhookByUserResponse:
        r"""Get all webhooks of a special user.
        Get all webhooks of a special user.
        OauthScopes: READ_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/incoming/user/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIncomingWebhookByUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.incoming_webhooks = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_join_details(self, request: operations.GetJoinDetailsRequest) -> operations.GetJoinDetailsResponse:
        r"""Gets the conference details of a conversation
        Gets the conference details of the given conversation. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/conversationdetails", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJoinDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation_details = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_join_details_multiple(self, request: operations.GetJoinDetailsMultipleRequest) -> operations.GetJoinDetailsMultipleResponse:
        r"""Gets the conference details for multiple conversations
        Gets the conference details of the given conversations. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/conversationdetails"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJoinDetailsMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversation_details = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_journal_entries(self, request: operations.GetJournalEntriesRequest) -> operations.GetJournalEntriesResponse:
        r"""Get journal
        Get telephony journal
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/telephony/{telephonyConversationId}/journal", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJournalEntriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversation_items = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_label(self, request: operations.GetLabelRequest) -> operations.GetLabelResponse:
        r"""Returns all user labels
        Returns all labels of the user that were defined either explicit or implicit via assignment to conversations.
        OauthScopes: READ_USER_PROFILE, ORGANIZE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/labels"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_likes(self, request: operations.GetLikesRequest) -> operations.GetLikesResponse:
        r"""Get the likes of an item
        Get the likes of an item
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/likes/{itemId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLikesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.participants_like_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_participants_by_conv_id(self, request: operations.GetParticipantsByConvIDRequest) -> operations.GetParticipantsByConvIDResponse:
        r"""Performs a list of participants
        Performs a search for participants. The max number of participants is configurable. If more participants are available a search pointer is returned for consecutive calls.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParticipantsByConvIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.conversation_participants_lists = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_participants_import_data(self, request: operations.GetParticipantsImportDataRequest) -> operations.GetParticipantsImportDataResponse:
        r"""missing documentation
        missing documentation
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/participant/import/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParticipantsImportDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.participants_import_data_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_pending_participants(self, request: operations.GetPendingParticipantsRequest) -> operations.GetPendingParticipantsResponse:
        r"""Get the pending participants of a space
        Get the pending participants of a space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/participants/pending", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPendingParticipantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.participants_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_pinned_conversations(self, request: operations.GetPinnedConversationsRequest) -> operations.GetPinnedConversationsResponse:
        r"""Returns pinned topics of a conversation
        Returns pinned topics of a conversation
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/pins", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPinnedConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.pinned_topics = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_pinned_topics(self, request: operations.GetPinnedTopicsRequest) -> operations.GetPinnedTopicsResponse:
        r"""Retrieve pinned topics
        Retrieve pinned topics of a space
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/pinnedTopics", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPinnedTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.space_pinned_topics = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_presence(self, request: operations.GetPresenceRequest) -> operations.GetPresenceResponse:
        r"""Gets the presence status
        Gets the presence status of the users whose IDs or email addresses are given.
        OauthScopes: READ_USER
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/presence"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.presences = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_profile(self, request: operations.GetProfileRequest) -> operations.GetProfileResponse:
        r"""Gets the authenticated user's profile information
        Gets the authenticated user's profile information.
        OauthScopes: READ_USER_PROFILE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/profile"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_recent_searches(self, request: operations.GetRecentSearchesRequest) -> operations.GetRecentSearchesResponse:
        r"""Retrieve recent space searches
        Retrieve recent space searches for a user.
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/search/recent"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecentSearchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_single_conversationtem(self, request: operations.GetSingleConversationtemRequest) -> operations.GetSingleConversationtemResponse:
        r"""Returns a text item
        Returns a text item for a given item id
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/messages/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSingleConversationtemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation_item = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_space_participants(self, request: operations.GetSpaceParticipantsRequest) -> operations.GetSpaceParticipantsResponse:
        r"""Get the participants of a space
        Get the participants of a space
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpaceParticipantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.participants_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_space_replies(self, request: operations.GetSpaceRepliesRequest) -> operations.GetSpaceRepliesResponse:
        r"""Gets space replies
        Gets a number of Space replies
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/topic/{topicId}/reply", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpaceRepliesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.space_reply = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_space_topics(self, request: operations.GetSpaceTopicsRequest) -> operations.GetSpaceTopicsResponse:
        r"""Gets space topics
        Gets a number of Space topics
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/topics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpaceTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.space_topics = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_spaces(self, request: operations.GetSpacesRequest) -> operations.GetSpacesResponse:
        r"""Get the spaces
        Get the spaces
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_spaces_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_spaces_by_ids(self, request: operations.GetSpacesByIdsRequest) -> operations.GetSpacesByIdsResponse:
        r"""Get the spaces by their ids
        Get the spaces by their ids
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/ids"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpacesByIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_spaces_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_support_info(self, request: operations.GetSupportInfoRequest) -> operations.GetSupportInfoResponse:
        r"""Gets the support information
        Gets the support information for the tenant of the requesting user
        OauthScopes: READ_USER_PROFILE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/supportinfo"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSupportInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_user_by_email_address(self, request: operations.GetUserByEmailAddressRequest) -> operations.GetUserByEmailAddressResponse:
        r"""Get user by email
        Get user by first or secondary email address
        OauthScopes: READ_USER_PROFILE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{emailAddress}/getUserByEmail", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserByEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_user_by_id(self, request: operations.GetUserByIDRequest) -> operations.GetUserByIDResponse:
        r"""Gets the user's profile information
        Gets the profile information of the user with the given ID.
        OauthScopes: READ_USER
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_user_presence(self, request: operations.GetUserPresenceRequest) -> operations.GetUserPresenceResponse:
        r"""Gets the presence status
        Gets the presence status of the users whose ID or email address is given.
        OauthScopes: READ_USER
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/presence", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserPresenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.presence = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_web_hook(self, request: operations.GetWebHookRequest) -> operations.GetWebHookResponse:
        r"""Gets a list of webHooks
        Gets the list of webHooks registered for this user or API.
        OauthScopes: READ_CONVERSATIONS, READ_USER
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_web_hook_by_id(self, request: operations.GetWebHookByIDRequest) -> operations.GetWebHookByIDResponse:
        r"""Gets a webHook
        Gets the registered webHook with the given ID.
        OauthScopes: READ_CONVERSATIONS, READ_USER
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebHookByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.web_hook = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def grant_space_acces(self, request: operations.GrantSpaceAccesRequest) -> operations.GrantSpaceAccesResponse:
        r"""grant access for a space
        grant access for a space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/participant/{participantId}/grant", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GrantSpaceAccesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def join_community_conversation(self, request: operations.JoinCommunityConversationRequest) -> operations.JoinCommunityConversationResponse:
        r"""Adds the authenticated user to a community
        Adds the authenticated user to the given community (i.e., allows the user to join this community). Contrary to the operation of adding a new participant, this operation can only be performed by a user who is not yet a member of the community.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/community/{convId}/join", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JoinCommunityConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def join_space(self, request: operations.JoinSpaceRequest) -> operations.JoinSpaceResponse:
        r"""Join a space
        Join a space
        OauthScopes: WRITE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/join", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JoinSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.participant_space_wrapper = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def leave_space(self, request: operations.LeaveSpaceRequest) -> operations.LeaveSpaceResponse:
        r"""Leave a space
        Leave a space
        OauthScopes: WRITE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/leave", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeaveSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def like_item(self, request: operations.LikeItemRequest) -> operations.LikeItemResponse:
        r"""Adds a \"like\" to a message
        Adds a \"like\" to the given message in the given conversation
        OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/{itemId}/like", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LikeItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def like_space_item(self, request: operations.LikeSpaceItemRequest) -> operations.LikeSpaceItemResponse:
        r"""Like a space item
        Like a space item
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/like/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LikeSpaceItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def moderate_conversation(self, request: operations.ModerateConversationRequest) -> operations.ModerateConversationResponse:
        r"""Set conversation moderated
        Set a conversation in moderatd mode. Moderators can be added and removed
        OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/moderate/{convId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ModerateConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def pin_a_conversation(self, request: operations.PinAConversationRequest) -> operations.PinAConversationResponse:
        r"""Pins a topic of a conversation
        Pins a topic of a conversation
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/pins/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PinAConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def pin_topic(self, request: operations.PinTopicRequest) -> operations.PinTopicResponse:
        r"""Pin a topic
        Pin a topic
        OauthScopes: WRITE_SPACE, MANAGE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{topicId}/pin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PinTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def post_webhook_as_slack_message(self, request: operations.PostWebhookAsSlackMessageRequest) -> operations.PostWebhookAsSlackMessageResponse:
        r"""Post text item for conversation via webhook.
        Post text items to conversations via slack apps.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/incoming/{webhookId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhookAsSlackMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def remove_label(self, request: operations.RemoveLabelRequest) -> operations.RemoveLabelResponse:
        r"""Remove a user label
        Remove a label from the list of user labels
        OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/labels/{labelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.label = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def remove_moderators(self, request: operations.RemoveModeratorsRequest) -> operations.RemoveModeratorsResponse:
        r"""Remove moderators
        Removes a list of moderators from a conversation
        OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/moderators", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveModeratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def remove_participant_community(self, request: operations.RemoveParticipantCommunityRequest) -> operations.RemoveParticipantCommunityResponse:
        r"""Removes participants from a community
        Removes one or more participants from the given community. The last participant of a community cannot be removed. This operation can only be performed by a user who is already a member of the community.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/community/{convId}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveParticipantCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def remove_participant_group(self, request: operations.RemoveParticipantGroupRequest) -> operations.RemoveParticipantGroupResponse:
        r"""Removes participants from a group conversation
        Removes one or more participants from the given group conversation. The last participant of a group conversation cannot be removed. This operation can only be performed on behalf of a user who is already a member of the conversation.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/group/{convId}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveParticipantGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def remove_web_hook(self, request: operations.RemoveWebHookRequest) -> operations.RemoveWebHookResponse:
        r"""Removes a registered webHook
        Unregisters the webHook with the given ID.
        OauthScopes: READ_CONVERSATIONS, READ_USER
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveWebHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def remove_web_hooks(self, request: operations.RemoveWebHooksRequest) -> operations.RemoveWebHooksResponse:
        r"""Removes all webHooks
        Unregisters all webHooks of the authenticated user
        OauthScopes: READ_CONVERSATIONS, READ_USER
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveWebHooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def request_space_acces(self, request: operations.RequestSpaceAccesRequest) -> operations.RequestSpaceAccesResponse:
        r"""request access for a space
        request access for a space
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/participant/request", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSpaceAccesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def resolve_invitation_token(self, request: operations.ResolveInvitationTokenRequest) -> operations.ResolveInvitationTokenResponse:
        r"""Resolves an invite token to a conversation
        Resolves an invite token to a conversation
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/resolveinvitetoken"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ResolveInvitationTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def search_conversations(self, request: operations.SearchConversationsRequest) -> operations.SearchConversationsResponse:
        r"""Performs a conversation search
        Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term.
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def search_participants_to_add(self, request: operations.SearchParticipantsToAddRequest) -> operations.SearchParticipantsToAddResponse:
        r"""Finds participants to add to add to a space 
        Finds participants to add to a space 
        OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/searchParticipantsToAdd", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchParticipantsToAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.add_participants_search_results = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def search_space_participants(self, request: operations.SearchSpaceParticipantsRequest) -> operations.SearchSpaceParticipantsResponse:
        r"""Get the participants of a space
        Get the participants of a space
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/searchSpaceParticipants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchSpaceParticipantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.participants_search_result_larges = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def search_user(self, request: operations.SearchUserRequest) -> operations.SearchUserResponse:
        r"""Search for users
        Search for users based on an email address or username
        OauthScopes: READ_USER
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.users = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def search_users_list(self, request: operations.SearchUsersListRequest) -> operations.SearchUsersListResponse:
        r"""Search multiple users.
        Search multiple users given by id or email address.
        OauthScopes: READ_USER
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.users = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def set_user_presence(self, request: operations.SetUserPresenceRequest) -> operations.SetUserPresenceResponse:
        r"""Updates the presence status
        Updates the presence status of the authenticated user.
        OauthScopes: WRITE_USER_PROFILE, MANAGE_PRESENCE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/presence"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetUserPresenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.presence = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def start_basic_spaces_search(self, request: operations.StartBasicSpacesSearchRequest) -> operations.StartBasicSpacesSearchResponse:
        r"""starts a basic search in spaces
        starts a basic search in spaces
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/search/startBasic"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StartBasicSpacesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.basic_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def start_detailed_space_search(self, request: operations.StartDetailedSpaceSearchRequest) -> operations.StartDetailedSpaceSearchResponse:
        r"""starts a detailed search in a space
        starts a detailed search in a space
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spaces/search/startDetailed"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StartDetailedSpaceSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.space_search_result_detailed_backs = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def un_flag_item(self, request: operations.UnFlagItemRequest) -> operations.UnFlagItemResponse:
        r"""Removes the flag from a message
        Removes the flag from a given message that is posted to the given conversation.
        OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/{itemId}/flag", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnFlagItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def un_pin_a_conversation(self, request: operations.UnPinAConversationRequest) -> operations.UnPinAConversationResponse:
        r"""Unpins a topic of a conversation
        Unpins a topic of a conversation
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/pins/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnPinAConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def unassign_label(self, request: operations.UnassignLabelRequest) -> operations.UnassignLabelResponse:
        r"""Removes a label from a conversation
        Removes a label from a conversation, you can search and organize your conversations based on these labels
        OauthScopes: WRITE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/label/{labelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnassignLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.label = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def unassign_labels(self, request: operations.UnassignLabelsRequest) -> operations.UnassignLabelsResponse:
        r"""Unassign labels
        Unassign labels from a space
        OauthScopes: WRITE_SPACE, ORGANIZE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/labels/unassign", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnassignLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.label_ids = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def undo_archive_conversation(self, request: operations.UndoArchiveConversationRequest) -> operations.UndoArchiveConversationResponse:
        r"""Unmute conversation
        The conversation will no longer be archived but active again
        OauthScopes: WRITE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/archive", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UndoArchiveConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def unflag_space_item(self, request: operations.UnflagSpaceItemRequest) -> operations.UnflagSpaceItemResponse:
        r"""Unflag a space item
        Unflag a space item
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/unflag/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnflagSpaceItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def unlike_item(self, request: operations.UnlikeItemRequest) -> operations.UnlikeItemResponse:
        r"""Removes a \"like\" from a message
        Removes a \"like\" from the given message in the given conversation
        OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/{itemId}/like", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlikeItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def unlike_space_item(self, request: operations.UnlikeSpaceItemRequest) -> operations.UnlikeSpaceItemResponse:
        r"""Unlike a space item
        Unlike a space item
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/unlike/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlikeSpaceItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def unmoderate_conversation(self, request: operations.UnmoderateConversationRequest) -> operations.UnmoderateConversationResponse:
        r"""Set conversation unmoderated
        Set a conversation to unmoderatd mode
        OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/unmoderate/{convId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnmoderateConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def unpin_topic(self, request: operations.UnpinTopicRequest) -> operations.UnpinTopicResponse:
        r"""Unpin a topic
        Unpin a topic
        OauthScopes: WRITE_SPACE, MANAGE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{topicId}/unpin", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnpinTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_conversation_community(self, request: operations.UpdateConversationCommunityRequest) -> operations.UpdateConversationCommunityResponse:
        r"""Updates the information of a community
        Updates the information of the given community.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/community/{convId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationCommunityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_conversation_group(self, request: operations.UpdateConversationGroupRequest) -> operations.UpdateConversationGroupResponse:
        r"""Updates the information of a group conversation
        Updates the information of the given group conversation.
        OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/group/{convId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConversationGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_participant_in_space(self, request: operations.UpdateParticipantInSpaceRequest) -> operations.UpdateParticipantInSpaceResponse:
        r"""Update participant
        Update participant in space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/participant", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateParticipantInSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_presence_web_hook(self, request: operations.UpdatePresenceWebHookRequest) -> operations.UpdatePresenceWebHookResponse:
        r"""Updates a Presence WebHook registration
        Updates a registration of a webHook that has a presence filter. The update can be performed either on the URL and/or the userIds. The new userIds, if any, will override any existing userIds.
        OauthScopes: READ_USER
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/presence/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePresenceWebHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.web_hook = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_profile(self, request: operations.UpdateProfileRequest) -> operations.UpdateProfileResponse:
        r"""Updates the user profile
        Updates the user profile of the authenticated user
        OauthScopes: WRITE_USER_PROFILE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/profile"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_read_timestamp(self, request: operations.UpdateReadTimestampRequest) -> operations.UpdateReadTimestampResponse:
        r"""Update read timestamp
        Update read timestamp
        OauthScopes: READ_SPACE, WRITE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/updateTimestamp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateReadTimestampResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_space(self, request: operations.UpdateSpaceRequest) -> operations.UpdateSpaceResponse:
        r"""Update a space
        Update a space
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.participant_space_wrapper = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_space_reply(self, request: operations.UpdateSpaceReplyRequest) -> operations.UpdateSpaceReplyResponse:
        r"""Updates a space reply
        Updates a space reply
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/topic/{topicId}/reply/{replyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSpaceReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.space_reply = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_space_topic(self, request: operations.UpdateSpaceTopicRequest) -> operations.UpdateSpaceTopicResponse:
        r"""Updates a topic
        Updates a topic
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/topic/{topicId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSpaceTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.space_topic = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_text_item(self, request: operations.UpdateTextItemRequest) -> operations.UpdateTextItemResponse:
        r"""Updates a message
        Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation.
        OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{convId}/messages/{itemId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTextItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conversation_item = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_topic_tags(self, request: operations.UpdateTopicTagsRequest) -> operations.UpdateTopicTagsResponse:
        r"""Update tags
        Update the tags of a topic  
        OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/topic/{topicId}/updateTags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTopicTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.space_topic = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def update_web_hook(self, request: operations.UpdateWebHookRequest) -> operations.UpdateWebHookResponse:
        r"""Updates a WebHook registration
        Updates a webHook registration with the given filter and callback URL.
        OauthScopes: READ_CONVERSATIONS, READ_USER
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.web_hook = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def v2_get_device_infos(self, request: operations.V2GetDeviceInfosRequest) -> operations.V2GetDeviceInfosResponse:
        r"""Get devices infos
        Get the device infos of the requesting user
        OauthScopes: READ_USER_PROFILE
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/telephony/deviceInfos"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.V2GetDeviceInfosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def v2_get_telephony_conversation_id(self, request: operations.V2GetTelephonyConversationIDRequest) -> operations.V2GetTelephonyConversationIDResponse:
        r"""Get telephony conversation id
        Get telephony conversation id for requesting client
        OauthScopes: READ_CONVERSATIONS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/telephony/telephonyConversationId"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.V2GetTelephonyConversationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def v2_get_topic_with_replies(self, request: operations.V2GetTopicWithRepliesRequest) -> operations.V2GetTopicWithRepliesResponse:
        r"""Gets space replies and a topic
        Gets a number of Space replies with a matching topic
        OauthScopes: READ_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/topic/{topicId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.V2GetTopicWithRepliesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.space_topic_with_replies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def v2_remove_participants_from_space(self, request: operations.V2RemoveParticipantsFromSpaceRequest) -> operations.V2RemoveParticipantsFromSpaceResponse:
        r"""Removes participants from a space
        removes Participants from a space
        OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{id}/participant/remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.V2RemoveParticipantsFromSpaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def v2_update_welcome_box_content(self, request: operations.V2UpdateWelcomeBoxContentRequest) -> operations.V2UpdateWelcomeBoxContentResponse:
        r"""Update content of welcome box
        Update content of the welcome box of a space
        OauthScopes: MANAGE_SPACE, WRITE_SPACE
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spaces/{spaceId}/welcomebox/{content}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.V2UpdateWelcomeBoxContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    