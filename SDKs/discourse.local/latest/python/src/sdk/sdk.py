

import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"http://discourse.local",
	"https://{defaultHost}",
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
        
    
    
    
    def delete_admin_badges_id_json(self, request: operations.DeleteAdminBadgesIDJSONRequest) -> operations.DeleteAdminBadgesIDJSONResponse:
        r"""Delete badge
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/badges/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdminBadgesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_admin_groups_id_json(self, request: operations.DeleteAdminGroupsIDJSONRequest) -> operations.DeleteAdminGroupsIDJSONResponse:
        r"""Delete a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/groups/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdminGroupsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_admin_groups_id_json_200_application_json_any = out

        return res

    
    def delete_admin_users_id_json(self, request: operations.DeleteAdminUsersIDJSONRequest) -> operations.DeleteAdminUsersIDJSONResponse:
        r"""Delete a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdminUsersIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_admin_users_id_json_200_application_json_any = out

        return res

    
    def delete_groups_id_members_json(self, request: operations.DeleteGroupsIDMembersJSONRequest) -> operations.DeleteGroupsIDMembersJSONResponse:
        r"""Remove group members
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/members.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGroupsIDMembersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_groups_id_members_json_200_application_json_any = out

        return res

    
    def delete_t_id_json(self, request: operations.DeleteTIDJSONRequest) -> operations.DeleteTIDJSONResponse:
        r"""Remove a topic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_admin_backups_filename_(self, request: operations.GetAdminBackupsFilenameRequest) -> operations.GetAdminBackupsFilenameResponse:
        r"""Download backup
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/backups/{filename}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminBackupsFilenameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_admin_backups_json(self) -> operations.GetAdminBackupsJSONResponse:
        r"""List backups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/backups.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminBackupsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetAdminBackupsJSON200ApplicationJSON]])
                res.get_admin_backups_json_200_application_json_objects = out

        return res

    
    def get_admin_badges_json(self) -> operations.GetAdminBadgesJSONResponse:
        r"""List badges
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/badges.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminBadgesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_admin_badges_json_200_application_json_any = out

        return res

    
    def get_admin_users_id_json(self, request: operations.GetAdminUsersIDJSONRequest) -> operations.GetAdminUsersIDJSONResponse:
        r"""Get a user by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminUsersIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_admin_users_id_json_200_application_json_any = out

        return res

    
    def get_admin_users_list_flag_json(self, request: operations.GetAdminUsersListFlagJSONRequest) -> operations.GetAdminUsersListFlagJSONResponse:
        r"""Get a list of users
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/list/{flag}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminUsersListFlagJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetAdminUsersListFlagJSON200ApplicationJSON]])
                res.get_admin_users_list_flag_json_200_application_json_objects = out

        return res

    
    def get_c_id_show_json(self, request: operations.GetCIDShowJSONRequest) -> operations.GetCIDShowJSONResponse:
        r"""Show category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c/{id}/show.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCIDShowJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_c_id_show_json_200_application_json_any = out

        return res

    
    def get_c_slug_id_json(self, request: operations.GetCSlugIDJSONRequest) -> operations.GetCSlugIDJSONResponse:
        r"""List topics
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c/{slug}/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCSlugIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_c_slug_id_json_200_application_json_any = out

        return res

    
    def get_categories_json(self) -> operations.GetCategoriesJSONResponse:
        r"""Retrieves a list of categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_categories_json_200_application_json_any = out

        return res

    
    def get_directory_items_json(self, request: operations.GetDirectoryItemsJSONRequest) -> operations.GetDirectoryItemsJSONResponse:
        r"""Get a public list of users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/directory_items.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectoryItemsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_directory_items_json_200_application_json_any = out

        return res

    
    def get_groups_json(self) -> operations.GetGroupsJSONResponse:
        r"""List groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_groups_json_200_application_json_any = out

        return res

    
    def get_groups_name_json(self, request: operations.GetGroupsNameJSONRequest) -> operations.GetGroupsNameJSONResponse:
        r"""Get a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{name}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsNameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_groups_name_json_200_application_json_any = out

        return res

    
    def get_groups_name_members_json(self, request: operations.GetGroupsNameMembersJSONRequest) -> operations.GetGroupsNameMembersJSONResponse:
        r"""List group members
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{name}/members.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsNameMembersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_groups_name_members_json_200_application_json_any = out

        return res

    
    def get_latest_json(self, request: operations.GetLatestJSONRequest) -> operations.GetLatestJSONResponse:
        r"""Get the latest topics
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/latest.json"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLatestJSON200ApplicationJSON])
                res.get_latest_json_200_application_json_object = out

        return res

    
    def get_notifications_json(self) -> operations.GetNotificationsJSONResponse:
        r"""Get the notifications that belong to the current user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsJSON200ApplicationJSON])
                res.get_notifications_json_200_application_json_object = out

        return res

    
    def get_posts_id_json(self, request: operations.GetPostsIDJSONRequest) -> operations.GetPostsIDJSONResponse:
        r"""Retrieve a single post
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{id}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPostsIDJSON200ApplicationJSON])
                res.get_posts_id_json_200_application_json_object = out

        return res

    
    def get_posts_json(self, request: operations.GetPostsJSONRequest) -> operations.GetPostsJSONResponse:
        r"""List latest posts across topics
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts.json"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPostsJSON200ApplicationJSON])
                res.get_posts_json_200_application_json_object = out

        return res

    
    def get_search_json(self, request: operations.GetSearchJSONRequest) -> operations.GetSearchJSONResponse:
        r"""Search for a term
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_search_json_200_application_json_any = out

        return res

    
    def get_t_id_json(self, request: operations.GetTIDJSONRequest) -> operations.GetTIDJSONResponse:
        r"""Get a single topic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTIDJSON200ApplicationJSON])
                res.get_t_id_json_200_application_json_object = out

        return res

    
    def get_t_id_posts_json(self, request: operations.GetTIDPostsJSONRequest) -> operations.GetTIDPostsJSONResponse:
        r"""Get specific posts from a topic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}/posts.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTIDPostsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTIDPostsJSON200ApplicationJSON])
                res.get_t_id_posts_json_200_application_json_object = out

        return res

    
    def get_tag_groups_id_json(self, request: operations.GetTagGroupsIDJSONRequest) -> operations.GetTagGroupsIDJSONResponse:
        r"""Get a single tag group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tag_groups/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagGroupsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTagGroupsIDJSON200ApplicationJSON])
                res.get_tag_groups_id_json_200_application_json_object = out

        return res

    
    def get_tag_groups_json(self) -> operations.GetTagGroupsJSONResponse:
        r"""Get a list of tag groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tag_groups.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagGroupsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTagGroupsJSON200ApplicationJSON])
                res.get_tag_groups_json_200_application_json_object = out

        return res

    
    def get_tag_name_json(self, request: operations.GetTagNameJSONRequest) -> operations.GetTagNameJSONResponse:
        r"""Get a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tag/{name}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagNameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTagNameJSON200ApplicationJSON])
                res.get_tag_name_json_200_application_json_object = out

        return res

    
    def get_tags_json(self) -> operations.GetTagsJSONResponse:
        r"""Get a list of tags
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTagsJSON200ApplicationJSON])
                res.get_tags_json_200_application_json_object = out

        return res

    
    def get_top_json(self, request: operations.GetTopJSONRequest) -> operations.GetTopJSONResponse:
        r"""Get the top topics
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/top.json"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTopJSON200ApplicationJSON])
                res.get_top_json_200_application_json_object = out

        return res

    
    def get_top_json_period_equal_flag_(self, request: operations.GetTopJSONPeriodEqualFlagRequest) -> operations.GetTopJSONPeriodEqualFlagResponse:
        r"""Get the top topics filtered by a flag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/top.json?period={flag}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopJSONPeriodEqualFlagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTopJSONPeriodEqualFlag200ApplicationJSON])
                res.get_top_json_period_equal_flag_200_application_json_object = out

        return res

    
    def get_topics_private_messages_sent_username_json(self, request: operations.GetTopicsPrivateMessagesSentUsernameJSONRequest) -> operations.GetTopicsPrivateMessagesSentUsernameJSONResponse:
        r"""Get a list of private messages sent for a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/topics/private-messages-sent/{username}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopicsPrivateMessagesSentUsernameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSON])
                res.get_topics_private_messages_sent_username_json_200_application_json_object = out

        return res

    
    def get_topics_private_messages_username_json(self, request: operations.GetTopicsPrivateMessagesUsernameJSONRequest) -> operations.GetTopicsPrivateMessagesUsernameJSONResponse:
        r"""Get a list of private messages for a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/topics/private-messages/{username}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopicsPrivateMessagesUsernameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTopicsPrivateMessagesUsernameJSON200ApplicationJSON])
                res.get_topics_private_messages_username_json_200_application_json_object = out

        return res

    
    def get_u_by_external_external_id_json(self, request: operations.GetUByExternalExternalIDJSONRequest) -> operations.GetUByExternalExternalIDJSONResponse:
        r"""Get a user by external_id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/u/by-external/{external_id}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUByExternalExternalIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUByExternalExternalIDJSON200ApplicationJSON])
                res.get_u_by_external_external_id_json_200_application_json_object = out

        return res

    
    def get_u_by_external_provider_external_id_json(self, request: operations.GetUByExternalProviderExternalIDJSONRequest) -> operations.GetUByExternalProviderExternalIDJSONResponse:
        r"""Get a user by identity provider external ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/u/by-external/{provider}/{external_id}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUByExternalProviderExternalIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUByExternalProviderExternalIDJSON200ApplicationJSON])
                res.get_u_by_external_provider_external_id_json_200_application_json_object = out

        return res

    
    def get_u_username_json(self, request: operations.GetUUsernameJSONRequest) -> operations.GetUUsernameJSONResponse:
        r"""Get a single user by username
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/u/{username}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUUsernameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUUsernameJSON200ApplicationJSON])
                res.get_u_username_json_200_application_json_object = out

        return res

    
    def get_user_actions_json(self, request: operations.GetUserActionsJSONRequest) -> operations.GetUserActionsJSONResponse:
        r"""Get a list of user actions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user_actions.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserActionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_user_actions_json_200_application_json_any = out

        return res

    
    def get_user_badges_username_json(self, request: operations.GetUserBadgesUsernameJSONRequest) -> operations.GetUserBadgesUsernameJSONResponse:
        r"""List badges for a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user-badges/{username}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserBadgesUsernameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_user_badges_username_json_200_application_json_any = out

        return res

    
    def post_admin_backups_json(self, request: operations.PostAdminBackupsJSONRequest) -> operations.PostAdminBackupsJSONResponse:
        r"""Create backup
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/backups.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminBackupsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_admin_backups_json_200_application_json_any = out

        return res

    
    def post_admin_badges_json(self, request: operations.PostAdminBadgesJSONRequest) -> operations.PostAdminBadgesJSONResponse:
        r"""Create badge
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/badges.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminBadgesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_admin_badges_json_200_application_json_any = out

        return res

    
    def post_admin_groups_json(self, request: operations.PostAdminGroupsJSONRequest) -> operations.PostAdminGroupsJSONResponse:
        r"""Creates a group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/groups.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminGroupsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminGroupsJSON200ApplicationJSON])
                res.post_admin_groups_json_200_application_json_object = out

        return res

    
    def post_admin_users_id_log_out_json(self, request: operations.PostAdminUsersIDLogOutJSONRequest) -> operations.PostAdminUsersIDLogOutJSONResponse:
        r"""Log a user out
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{id}/log_out.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminUsersIDLogOutJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_admin_users_id_log_out_json_200_application_json_any = out

        return res

    
    def post_categories_json(self, request: operations.PostCategoriesJSONRequest) -> operations.PostCategoriesJSONResponse:
        r"""Creates a category
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCategoriesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_categories_json_200_application_json_any = out

        return res

    
    def post_invites_json(self, request: operations.PostInvitesJSONRequest) -> operations.PostInvitesJSONResponse:
        r"""Create an invite
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/invites.json"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInvitesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostInvitesJSON200ApplicationJSON])
                res.post_invites_json_200_application_json_object = out

        return res

    
    def post_post_actions_json(self, request: operations.PostPostActionsJSONRequest) -> operations.PostPostActionsJSONResponse:
        r"""Like a post and other actions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/post_actions.json"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPostActionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPostActionsJSON200ApplicationJSON])
                res.post_post_actions_json_200_application_json_object = out

        return res

    
    def post_posts_json(self, request: operations.PostPostsJSONRequest) -> operations.PostPostsJSONResponse:
        r"""Creates a new topic, a new post, or a private message
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPostsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_posts_json_200_application_json_any = out

        return res

    
    def post_session_forgot_password_json(self, request: operations.PostSessionForgotPasswordJSONRequest) -> operations.PostSessionForgotPasswordJSONResponse:
        r"""Send password reset email
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/session/forgot_password.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSessionForgotPasswordJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_session_forgot_password_json_200_application_json_any = out

        return res

    
    def post_t_id_invite_json(self, request: operations.PostTIDInviteJSONRequest) -> operations.PostTIDInviteJSONResponse:
        r"""Invite to topic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}/invite.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTIDInviteJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTIDInviteJSON200ApplicationJSON])
                res.post_t_id_invite_json_200_application_json_object = out

        return res

    
    def post_t_id_notifications_json(self, request: operations.PostTIDNotificationsJSONRequest) -> operations.PostTIDNotificationsJSONResponse:
        r"""Set notification level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}/notifications.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTIDNotificationsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTIDNotificationsJSON200ApplicationJSON])
                res.post_t_id_notifications_json_200_application_json_object = out

        return res

    
    def post_t_id_timer_json(self, request: operations.PostTIDTimerJSONRequest) -> operations.PostTIDTimerJSONResponse:
        r"""Create topic timer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}/timer.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTIDTimerJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTIDTimerJSON200ApplicationJSON])
                res.post_t_id_timer_json_200_application_json_object = out

        return res

    
    def post_tag_groups_json(self, request: operations.PostTagGroupsJSONRequest) -> operations.PostTagGroupsJSONResponse:
        r"""Creates a tag group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tag_groups.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTagGroupsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTagGroupsJSON200ApplicationJSON])
                res.post_tag_groups_json_200_application_json_object = out

        return res

    
    def post_uploads_json(self, request: operations.PostUploadsJSONRequest) -> operations.PostUploadsJSONResponse:
        r"""Creates an upload
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/uploads.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUploadsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_uploads_json_200_application_json_any = out

        return res

    
    def post_user_avatar_username_refresh_gravatar_json(self, request: operations.PostUserAvatarUsernameRefreshGravatarJSONRequest) -> operations.PostUserAvatarUsernameRefreshGravatarJSONResponse:
        r"""Refresh gravatar
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user_avatar/{username}/refresh_gravatar.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserAvatarUsernameRefreshGravatarJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_user_avatar_username_refresh_gravatar_json_200_application_json_any = out

        return res

    
    def post_users_json(self, request: operations.PostUsersJSONRequest) -> operations.PostUsersJSONResponse:
        r"""Creates a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users.json"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersJSON200ApplicationJSON])
                res.post_users_json_200_application_json_object = out

        return res

    
    def put_admin_backups_filename_(self, request: operations.PutAdminBackupsFilenameRequest) -> operations.PutAdminBackupsFilenameResponse:
        r"""Send download backup email
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/backups/{filename}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdminBackupsFilenameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_admin_badges_id_json(self, request: operations.PutAdminBadgesIDJSONRequest) -> operations.PutAdminBadgesIDJSONResponse:
        r"""Update badge
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/badges/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdminBadgesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_admin_badges_id_json_200_application_json_any = out

        return res

    
    def put_admin_users_id_anonymize_json(self, request: operations.PutAdminUsersIDAnonymizeJSONRequest) -> operations.PutAdminUsersIDAnonymizeJSONResponse:
        r"""Anonymize a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{id}/anonymize.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdminUsersIDAnonymizeJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_admin_users_id_anonymize_json_200_application_json_any = out

        return res

    
    def put_admin_users_id_suspend_json(self, request: operations.PutAdminUsersIDSuspendJSONRequest) -> operations.PutAdminUsersIDSuspendJSONResponse:
        r"""Suspend a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{id}/suspend.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdminUsersIDSuspendJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_admin_users_id_suspend_json_200_application_json_any = out

        return res

    
    def put_categories_id_json(self, request: operations.PutCategoriesIDJSONRequest) -> operations.PutCategoriesIDJSONResponse:
        r"""Updates a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCategoriesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_categories_id_json_200_application_json_any = out

        return res

    
    def put_groups_id_json(self, request: operations.PutGroupsIDJSONRequest) -> operations.PutGroupsIDJSONResponse:
        r"""Update a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutGroupsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGroupsIDJSON200ApplicationJSON])
                res.put_groups_id_json_200_application_json_object = out

        return res

    
    def put_groups_id_members_json(self, request: operations.PutGroupsIDMembersJSONRequest) -> operations.PutGroupsIDMembersJSONResponse:
        r"""Add group members
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/members.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutGroupsIDMembersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_groups_id_members_json_200_application_json_any = out

        return res

    
    def put_notifications_mark_read_json(self, request: operations.PutNotificationsMarkReadJSONRequest) -> operations.PutNotificationsMarkReadJSONResponse:
        r"""Mark notifications as read
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/mark-read.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutNotificationsMarkReadJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNotificationsMarkReadJSON200ApplicationJSON])
                res.put_notifications_mark_read_json_200_application_json_object = out

        return res

    
    def put_posts_id_json(self, request: operations.PutPostsIDJSONRequest) -> operations.PutPostsIDJSONResponse:
        r"""Update a single post
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{id}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPostsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutPostsIDJSON200ApplicationJSON])
                res.put_posts_id_json_200_application_json_object = out

        return res

    
    def put_posts_id_locked_json(self, request: operations.PutPostsIDLockedJSONRequest) -> operations.PutPostsIDLockedJSONResponse:
        r"""Lock a post from being edited
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{id}/locked.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPostsIDLockedJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutPostsIDLockedJSON200ApplicationJSON])
                res.put_posts_id_locked_json_200_application_json_object = out

        return res

    
    def put_t_id_bookmark_json(self, request: operations.PutTIDBookmarkJSONRequest) -> operations.PutTIDBookmarkJSONResponse:
        r"""Bookmark topic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}/bookmark.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTIDBookmarkJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_t_id_change_timestamp_json(self, request: operations.PutTIDChangeTimestampJSONRequest) -> operations.PutTIDChangeTimestampJSONResponse:
        r"""Update topic timestamp
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}/change-timestamp.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTIDChangeTimestampJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTIDChangeTimestampJSON200ApplicationJSON])
                res.put_t_id_change_timestamp_json_200_application_json_object = out

        return res

    
    def put_t_id_json(self, request: operations.PutTIDJSONRequest) -> operations.PutTIDJSONResponse:
        r"""Update a topic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/-/{id}.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTIDJSON200ApplicationJSON])
                res.put_t_id_json_200_application_json_object = out

        return res

    
    def put_t_id_status_json(self, request: operations.PutTIDStatusJSONRequest) -> operations.PutTIDStatusJSONResponse:
        r"""Update the status of a topic
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/t/{id}/status.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTIDStatusJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTIDStatusJSON200ApplicationJSON])
                res.put_t_id_status_json_200_application_json_object = out

        return res

    
    def put_tag_groups_id_json(self, request: operations.PutTagGroupsIDJSONRequest) -> operations.PutTagGroupsIDJSONResponse:
        r"""Update tag group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tag_groups/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTagGroupsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTagGroupsIDJSON200ApplicationJSON])
                res.put_tag_groups_id_json_200_application_json_object = out

        return res

    
    def put_u_username_preferences_avatar_pick_json(self, request: operations.PutUUsernamePreferencesAvatarPickJSONRequest) -> operations.PutUUsernamePreferencesAvatarPickJSONResponse:
        r"""Update avatar
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/u/{username}/preferences/avatar/pick.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUUsernamePreferencesAvatarPickJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_u_username_preferences_avatar_pick_json_200_application_json_any = out

        return res

    
    def put_u_username_preferences_email_json(self, request: operations.PutUUsernamePreferencesEmailJSONRequest) -> operations.PutUUsernamePreferencesEmailJSONResponse:
        r"""Update email
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/u/{username}/preferences/email.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUUsernamePreferencesEmailJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_users_password_reset_token_json(self, request: operations.PutUsersPasswordResetTokenJSONRequest) -> operations.PutUsersPasswordResetTokenJSONResponse:
        r"""Change password
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/password-reset/{token}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUsersPasswordResetTokenJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    