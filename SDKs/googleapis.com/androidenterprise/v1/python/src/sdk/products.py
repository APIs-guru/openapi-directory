import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Products:
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

    
    def androidenterprise_products_approve(self, request: operations.AndroidenterpriseProductsApproveRequest) -> operations.AndroidenterpriseProductsApproveResponse:
        r""" Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseProductsApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidenterprise_products_generate_approval_url(self, request: operations.AndroidenterpriseProductsGenerateApprovalURLRequest) -> operations.AndroidenterpriseProductsGenerateApprovalURLResponse:
        r"""Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseProductsGenerateApprovalURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductsGenerateApprovalURLResponse])
                res.products_generate_approval_url_response = out

        return res

    
    def androidenterprise_products_get(self, request: operations.AndroidenterpriseProductsGetRequest) -> operations.AndroidenterpriseProductsGetResponse:
        r"""Retrieves details of a product for display to an enterprise admin.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseProductsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out

        return res

    
    def androidenterprise_products_get_app_restrictions_schema(self, request: operations.AndroidenterpriseProductsGetAppRestrictionsSchemaRequest) -> operations.AndroidenterpriseProductsGetAppRestrictionsSchemaResponse:
        r"""Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseProductsGetAppRestrictionsSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppRestrictionsSchema])
                res.app_restrictions_schema = out

        return res

    
    def androidenterprise_products_get_permissions(self, request: operations.AndroidenterpriseProductsGetPermissionsRequest) -> operations.AndroidenterpriseProductsGetPermissionsResponse:
        r"""Retrieves the Android app permissions required by this app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseProductsGetPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductPermissions])
                res.product_permissions = out

        return res

    
    def androidenterprise_products_list(self, request: operations.AndroidenterpriseProductsListRequest) -> operations.AndroidenterpriseProductsListResponse:
        r"""Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/products", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductsListResponse])
                res.products_list_response = out

        return res

    
    def androidenterprise_products_unapprove(self, request: operations.AndroidenterpriseProductsUnapproveRequest) -> operations.AndroidenterpriseProductsUnapproveResponse:
        r"""Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseProductsUnapproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    