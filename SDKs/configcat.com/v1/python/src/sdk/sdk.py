

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.configcat.com",
]


class SDK:
    

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
        
    
    
    
    def add_or_update_integration_link(self, request: operations.AddOrUpdateIntegrationLinkRequest) -> operations.AddOrUpdateIntegrationLinkResponse:
        r"""Add or update Integration link
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddOrUpdateIntegrationLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkModel])
                res.integration_link_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkModel])
                res.integration_link_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def create_config(self, request: operations.CreateConfigRequest) -> operations.CreateConfigResponse:
        r"""Create Config
        This endpoint creates a new Config in a specified Product 
        identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/configs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModelHaljson])
                res.config_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModel])
                res.config_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def create_environment(self, request: operations.CreateEnvironmentRequest) -> operations.CreateEnvironmentResponse:
        r"""Create Environment
        This endpoint creates a new Environment in a specified Product 
        identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/environments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModelHaljson])
                res.environment_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModel])
                res.environment_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def create_permission_group(self, request: operations.CreatePermissionGroupRequest) -> operations.CreatePermissionGroupResponse:
        r"""Create Permission Group
        This endpoint creates a new Permission Group in a specified Product 
        identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def create_product(self, request: operations.CreateProductRequest) -> operations.CreateProductResponse:
        r"""Create Product
        This endpoint creates a new Product in a specified Organization 
        identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{organizationId}/products", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductModelHaljson])
                res.product_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductModel])
                res.product_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def create_setting(self, request: operations.CreateSettingRequest) -> operations.CreateSettingResponse:
        r"""Create Flag
        This endpoint creates a new Feature Flag or Setting in a specified Config
        identified by the `configId` parameter.
        
        **Important:** The `key` attribute must be unique within the given Config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModelHaljson])
                res.setting_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModel])
                res.setting_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def create_tag(self, request: operations.CreateTagRequest) -> operations.CreateTagResponse:
        r"""Create Tag
        This endpoint creates a new Tag in a specified Product 
        identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagModelHaljson])
                res.tag_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagModel])
                res.tag_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_config(self, request: operations.DeleteConfigRequest) -> operations.DeleteConfigResponse:
        r"""Delete Config
        This endpoint removes a Config identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_environment(self, request: operations.DeleteEnvironmentRequest) -> operations.DeleteEnvironmentResponse:
        r"""Delete Environment
        This endpoint removes an Environment identified by the `environmentId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_integration_link(self, request: operations.DeleteIntegrationLinkRequest) -> operations.DeleteIntegrationLinkResponse:
        r"""Delete Integration link
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIntegrationLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteIntegrationLinkModel])
                res.delete_integration_link_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteIntegrationLinkModel])
                res.delete_integration_link_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_organization_member(self, request: operations.DeleteOrganizationMemberRequest) -> operations.DeleteOrganizationMemberResponse:
        r"""Delete Member from Organization
        This endpoint removes a Member identified by the `userId` from the 
        given Organization identified by the `organizationId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{organizationId}/members/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_permission_group(self, request: operations.DeletePermissionGroupRequest) -> operations.DeletePermissionGroupResponse:
        r"""Delete Permission Group
        This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/permissions/{permissionGroupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_product(self, request: operations.DeleteProductRequest) -> operations.DeleteProductResponse:
        r"""Delete Product
        This endpoint removes a Product identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_product_member(self, request: operations.DeleteProductMemberRequest) -> operations.DeleteProductMemberResponse:
        r"""Delete Member from Product
        This endpoint removes a Member identified by the `userId` from the 
        given Product identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/members/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_setting(self, request: operations.DeleteSettingRequest) -> operations.DeleteSettingResponse:
        r"""Delete Flag
        This endpoint removes a Feature Flag or Setting from a specified Config, 
        identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_tag(self, request: operations.DeleteTagRequest) -> operations.DeleteTagResponse:
        r"""Delete Tag
        This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/tags/{tagId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_auditlogs(self, request: operations.GetAuditlogsRequest) -> operations.GetAuditlogsResponse:
        r"""List Audit log items for Product
        This endpoint returns the list of Audit log items for a given Product 
        and the result can be optionally filtered by Config and/or Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/auditlogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditlogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_config(self, request: operations.GetConfigRequest) -> operations.GetConfigResponse:
        r"""Get Config
        This endpoint returns the metadata of a Config
        identified by the `configId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModelHaljson])
                res.config_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModel])
                res.config_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_configs(self, request: operations.GetConfigsRequest) -> operations.GetConfigsResponse:
        r"""List Configs
        This endpoint returns the list of the Configs that belongs to the given Product identified by the
        `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/configs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ConfigModelHaljson]])
                res.config_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ConfigModel]])
                res.config_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_deleted_settings(self, request: operations.GetDeletedSettingsRequest) -> operations.GetDeletedSettingsResponse:
        r"""List Deleted Settings
        This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/deleted-settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeletedSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SettingModelHaljson]])
                res.setting_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SettingModel]])
                res.setting_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_environment(self, request: operations.GetEnvironmentRequest) -> operations.GetEnvironmentResponse:
        r"""Get Environment
        This endpoint returns the metadata of an Environment 
        identified by the `environmentId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModelHaljson])
                res.environment_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModel])
                res.environment_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_environments(self, request: operations.GetEnvironmentsRequest) -> operations.GetEnvironmentsResponse:
        r"""List Environments
        This endpoint returns the list of the Environments that belongs to the given Product identified by the
        `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/environments", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EnvironmentModelHaljson]])
                res.environment_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EnvironmentModel]])
                res.environment_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_integration_link_details(self, request: operations.GetIntegrationLinkDetailsRequest) -> operations.GetIntegrationLinkDetailsResponse:
        r"""Get Integration link
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/integrationLink/{integrationLinkType}/{key}/details", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationLinkDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkDetailsModel])
                res.integration_link_details_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegrationLinkDetailsModel])
                res.integration_link_details_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_me(self) -> operations.GetMeResponse:
        r"""Get authenticated user details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/me"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MeModel])
                res.me_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MeModel])
                res.me_model = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_organization_auditlogs(self, request: operations.GetOrganizationAuditlogsRequest) -> operations.GetOrganizationAuditlogsResponse:
        r"""List Audit log items for Organization
        This endpoint returns the list of Audit log items for a given Organization 
        and the result can be optionally filtered by Product and/or Config and/or Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{organizationId}/auditlogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAuditlogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AuditLogItemModel]])
                res.audit_log_item_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_organization_members(self, request: operations.GetOrganizationMembersRequest) -> operations.GetOrganizationMembersResponse:
        r"""List Organization Members
        This endpoint returns the list of Members that belongs 
        to the given Organization, identified by the `organizationId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{organizationId}/members", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserModel]])
                res.user_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserModel]])
                res.user_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_organizations(self) -> operations.GetOrganizationsResponse:
        r"""List Organizations
        This endpoint returns the list of the Organizations that belongs to the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/organizations"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrganizationModelHaljson]])
                res.organization_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrganizationModel]])
                res.organization_models = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_permission_group(self, request: operations.GetPermissionGroupRequest) -> operations.GetPermissionGroupResponse:
        r"""Get Permission Group
        This endpoint returns the metadata of a Permission Group 
        identified by the `permissionGroupId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/permissions/{permissionGroupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_permission_groups(self, request: operations.GetPermissionGroupsRequest) -> operations.GetPermissionGroupsResponse:
        r"""List Permission Groups
        This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
        `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/permissions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPermissionGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PermissionGroupModel]])
                res.permission_group_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PermissionGroupModel]])
                res.permission_group_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_product(self, request: operations.GetProductRequest) -> operations.GetProductResponse:
        r"""Get Product
        This endpoint returns the metadata of a Product 
        identified by the `productId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductModelHaljson])
                res.product_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductModel])
                res.product_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_product_members(self, request: operations.GetProductMembersRequest) -> operations.GetProductMembersResponse:
        r"""List Product Members
        This endpoint returns the list of Members that belongs 
        to the given Product, identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/members", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MemberModel]])
                res.member_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MemberModel]])
                res.member_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_products(self) -> operations.GetProductsResponse:
        r"""List Products
        This endpoint returns the list of the Products that belongs to the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/products"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductModelHaljson]])
                res.product_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductModel]])
                res.product_models = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_sdk_keys(self, request: operations.GetSDKKeysRequest) -> operations.GetSDKKeysResponse:
        r"""Get SDK Key
        This endpoint returns the SDK Key for your Config in a specified Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSDKKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SDKKeysModel])
                res.sdk_keys_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SDKKeysModel])
                res.sdk_keys_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_setting(self, request: operations.GetSettingRequest) -> operations.GetSettingResponse:
        r"""Get Flag
        This endpoint returns the metadata attributes of a Feature Flag or Setting 
        identified by the `settingId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModelHaljson])
                res.setting_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModel])
                res.setting_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_setting_value(self, request: operations.GetSettingValueRequest) -> operations.GetSettingValueResponse:
        r"""Get value
        This endpoint returns the value of a Feature Flag or Setting 
        in a specified Environment identified by the `environmentId` parameter.
        
        The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
        The `value` represents what the clients will get when the evaluation requests of our SDKs 
        are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
        
        The `rolloutRules` and `percentageRules` attributes are representing the current 
        Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
        in an **ordered** collection, which means the order of the returned rules is matching to the
        evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}/settings/{settingId}/value", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_setting_value_by_sdkkey(self, request: operations.GetSettingValueBySdkkeyRequest) -> operations.GetSettingValueBySdkkeyResponse:
        r"""Get value
        This endpoint returns the value of a Feature Flag or Setting 
        in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
        
        The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
        The `value` represents what the clients will get when the evaluation requests of our SDKs 
        are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
        
        The `rolloutRules` and `percentageRules` attributes are representing the current 
        Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
        in an **ordered** collection, which means the order of the returned rules is matching to the
        evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingKeyOrId}/value", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingValueBySdkkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_setting_values(self, request: operations.GetSettingValuesRequest) -> operations.GetSettingValuesResponse:
        r"""Get values
        This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
        in a specified Environment identified by the `environmentId` parameter.
        
        The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
        The `value` represents what the clients will get when the evaluation requests of our SDKs 
        are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
        
        The `rolloutRules` and `percentageRules` attributes are representing the current 
        Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
        in an **ordered** collection, which means the order of the returned rules is matching to the
        evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/environments/{environmentId}/values", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSettingValuesModel])
                res.config_setting_values_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigSettingValuesModel])
                res.config_setting_values_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_settings(self, request: operations.GetSettingsRequest) -> operations.GetSettingsResponse:
        r"""List Flags
        This endpoint returns the list of the Feature Flags and Settings defined in a 
        specified Config, identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SettingModelHaljson]])
                res.setting_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SettingModel]])
                res.setting_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_settings_by_tag(self, request: operations.GetSettingsByTagRequest) -> operations.GetSettingsByTagResponse:
        r"""List Settings by Tag
        This endpoint returns the list of the Settings that 
        has the specified Tag, identified by the `tagId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/tags/{tagId}/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsByTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SettingModelHaljson]])
                res.setting_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SettingModel]])
                res.setting_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_tag(self, request: operations.GetTagRequest) -> operations.GetTagResponse:
        r"""Get Tag
        This endpoint returns the metadata of a Tag 
        identified by the `tagId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/tags/{tagId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagModelHaljson])
                res.tag_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagModel])
                res.tag_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_tags(self, request: operations.GetTagsRequest) -> operations.GetTagsResponse:
        r"""List Tags
        This endpoint returns the list of the Tags in a 
        specified Product, identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/tags", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagModelHaljson]])
                res.tag_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagModel]])
                res.tag_models = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def invite_member(self, request: operations.InviteMemberRequest) -> operations.InviteMemberResponse:
        r"""Invite Member
        This endpoint invites a Member into the given Product identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/members/invite", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InviteMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def replace_setting_value(self, request: operations.ReplaceSettingValueRequest) -> operations.ReplaceSettingValueResponse:
        r"""Replace value
        This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
        
        Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
        
        **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
        want to change in its original state. Not listing one means that it will reset.
        
        For example: We have the following resource.
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": false
        }
        ```
        If we send a replace request body as below:
        ```
        {
        	\"value\": true
        }
        ```
        Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
        So we get a response like this:
        ```
        {
        	\"rolloutPercentageItems\": [],
        	\"rolloutRules\": [],
        	\"value\": true
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}/settings/{settingId}/value", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplaceSettingValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def replace_setting_value_by_sdkkey(self, request: operations.ReplaceSettingValueBySdkkeyRequest) -> operations.ReplaceSettingValueBySdkkeyResponse:
        r"""Replace value
        This endpoint replaces the value of a Feature Flag or Setting 
        in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
        
        Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
        
        **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
        want to change to its original state. Not listing one means that it will reset.
        
        For example: We have the following resource.
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": false
        }
        ```
        If we send a replace request body as below:
        ```
        {
        	\"value\": true
        }
        ```
        Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
        So we get a response like this:
        ```
        {
        	\"rolloutPercentageItems\": [],
        	\"rolloutRules\": [],
        	\"value\": true
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingKeyOrId}/value", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplaceSettingValueBySdkkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_config(self, request: operations.UpdateConfigRequest) -> operations.UpdateConfigResponse:
        r"""Update Config
        This endpoint updates a Config identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModelHaljson])
                res.config_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModel])
                res.config_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_environment(self, request: operations.UpdateEnvironmentRequest) -> operations.UpdateEnvironmentResponse:
        r"""Update Environment
        This endpoint updates an Environment identified by the `environmentId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModelHaljson])
                res.environment_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModel])
                res.environment_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_permission_group(self, request: operations.UpdatePermissionGroupRequest) -> operations.UpdatePermissionGroupResponse:
        r"""Update Permission Group
        This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/permissions/{permissionGroupId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_product(self, request: operations.UpdateProductRequest) -> operations.UpdateProductResponse:
        r"""Update Product
        This endpoint updates a Product identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductModelHaljson])
                res.product_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductModel])
                res.product_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_setting(self, request: operations.UpdateSettingRequest) -> operations.UpdateSettingResponse:
        r"""Update Flag
        This endpoint updates the metadata of a Feature Flag or Setting 
        with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
        
        Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
        The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
        
        The advantage of using JSON Patch is that you can describe individual update operations on a resource
        without touching attributes that you don't want to change.
        
        For example: We have the following resource.
        ```
        {
        	\"settingId\": 5345,
        	\"key\": \"myGrandFeature\",
        	\"name\": \"Tihs is a naem with soem typos.\",
        	\"hint\": \"This flag controls my grandioso feature.\",
        	\"settingType\": \"boolean\",
        	\"tags\": [
        		{
        			\"tagId\": 0,
        			\"name\": \"sample tag\",
        			\"color\": \"whale\"
        		}
        	]
        }
        ```
        If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
        ```
        [
        	{
        		\"op\": \"replace\",
        		\"path\": \"/name\",
        		\"value\": \"This is the name without typos.\"
        	},
        	{
        		\"op\": \"add\",
        		\"path\": \"/tags/-\",
        		\"value\": 2
        	}
        ]
        ```
        Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
        So we get a response like this:
        ```
        {
        	\"settingId\": 5345,
        	\"key\": \"myGrandFeature\",
        	\"name\": \"This is the name without typos.\",
        	\"hint\": \"This flag controls my grandioso feature.\",
        	\"settingType\": \"boolean\",
        	\"tags\": [
        		{
        			\"tagId\": 0,
        			\"name\": \"sample tag\",
        			\"color\": \"whale\"
        		},
        		{
        			\"tagId\": 2,
        			\"name\": \"another tag\",
        			\"color\": \"koala\"
        		}
        	]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModelHaljson])
                res.setting_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModel])
                res.setting_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_setting_value(self, request: operations.UpdateSettingValueRequest) -> operations.UpdateSettingValueResponse:
        r"""Update value
        This endpoint updates the value of a Feature Flag or Setting 
        with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
        
        Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
        
        The advantage of using JSON Patch is that you can describe individual update operations on a resource
        without touching attributes that you don't want to change. It supports collection reordering, so it also 
        can be used for reordering the targeting rules of a Feature Flag or Setting.
        
        For example: We have the following resource.
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": false
        }
        ```
        If we send an update request body as below:
        ```
        [
        	{
        		\"op\": \"replace\",
        		\"path\": \"/value\",
        		\"value\": true
        	}
        ]
        ```
        Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
        So we get a response like this:
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": true
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}/settings/{settingId}/value", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSettingValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_setting_value_by_sdkkey(self, request: operations.UpdateSettingValueBySdkkeyRequest) -> operations.UpdateSettingValueBySdkkeyResponse:
        r"""Update value
        This endpoint updates the value of a Feature Flag or Setting 
        with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
        identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
        
        Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
        
        The advantage of using JSON Patch is that you can describe individual update operations on a resource
        without touching attributes that you don't want to change. It supports collection reordering, so it also 
        can be used for reordering the targeting rules of a Feature Flag or Setting.
        
        For example: We have the following resource.
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": false
        }
        ```
        If we send an update request body as below:
        ```
        [
        	{
        		\"op\": \"replace\",
        		\"path\": \"/value\",
        		\"value\": true
        	}
        ]
        ```
        Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
        So we get a response like this:
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": true
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingKeyOrId}/value", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSettingValueBySdkkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_tag(self, request: operations.UpdateTagRequest) -> operations.UpdateTagResponse:
        r"""Update Tag
        This endpoint updates a Tag identified by the `tagId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/tags/{tagId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagModelHaljson])
                res.tag_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagModel])
                res.tag_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    