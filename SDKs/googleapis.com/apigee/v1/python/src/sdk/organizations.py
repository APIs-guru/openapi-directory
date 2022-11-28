import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Organizations:
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

    
    def apigee_organizations_analytics_datastores_create(self, request: operations.ApigeeOrganizationsAnalyticsDatastoresCreateRequest) -> operations.ApigeeOrganizationsAnalyticsDatastoresCreateResponse:
        r"""Create a Datastore for an org
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/datastores", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsAnalyticsDatastoresCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Datastore])
                res.google_cloud_apigee_v1_datastore = out

        return res

    
    def apigee_organizations_analytics_datastores_list(self, request: operations.ApigeeOrganizationsAnalyticsDatastoresListRequest) -> operations.ApigeeOrganizationsAnalyticsDatastoresListResponse:
        r"""List Datastores
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/datastores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsAnalyticsDatastoresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDatastoresResponse])
                res.google_cloud_apigee_v1_list_datastores_response = out

        return res

    
    def apigee_organizations_analytics_datastores_test(self, request: operations.ApigeeOrganizationsAnalyticsDatastoresTestRequest) -> operations.ApigeeOrganizationsAnalyticsDatastoresTestResponse:
        r"""Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/datastores:test", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsAnalyticsDatastoresTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1TestDatastoreResponse])
                res.google_cloud_apigee_v1_test_datastore_response = out

        return res

    
    def apigee_organizations_apiproducts_create(self, request: operations.ApigeeOrganizationsApiproductsCreateRequest) -> operations.ApigeeOrganizationsApiproductsCreateResponse:
        r"""Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apiproducts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APIProduct])
                res.google_cloud_apigee_v1_api_product = out

        return res

    
    def apigee_organizations_apiproducts_list(self, request: operations.ApigeeOrganizationsApiproductsListRequest) -> operations.ApigeeOrganizationsApiproductsListResponse:
        r"""Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apiproducts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAPIProductsResponse])
                res.google_cloud_apigee_v1_list_api_products_response = out

        return res

    
    def apigee_organizations_apiproducts_rateplans_create(self, request: operations.ApigeeOrganizationsApiproductsRateplansCreateRequest) -> operations.ApigeeOrganizationsApiproductsRateplansCreateResponse:
        r"""Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/rateplans", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsRateplansCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1RatePlan])
                res.google_cloud_apigee_v1_rate_plan = out

        return res

    
    def apigee_organizations_apiproducts_rateplans_list(self, request: operations.ApigeeOrganizationsApiproductsRateplansListRequest) -> operations.ApigeeOrganizationsApiproductsRateplansListResponse:
        r"""Lists all the rate plans for an API product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/rateplans", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsRateplansListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListRatePlansResponse])
                res.google_cloud_apigee_v1_list_rate_plans_response = out

        return res

    
    def apigee_organizations_apis_create(self, request: operations.ApigeeOrganizationsApisCreateRequest) -> operations.ApigeeOrganizationsApisCreateResponse:
        r"""Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apis", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApisCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APIProxyRevision])
                res.google_cloud_apigee_v1_api_proxy_revision = out

        return res

    
    def apigee_organizations_apis_list(self, request: operations.ApigeeOrganizationsApisListRequest) -> operations.ApigeeOrganizationsApisListResponse:
        r"""Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apis", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApisListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAPIProxiesResponse])
                res.google_cloud_apigee_v1_list_api_proxies_response = out

        return res

    
    def apigee_organizations_create(self, request: operations.ApigeeOrganizationsCreateRequest) -> operations.ApigeeOrganizationsCreateResponse:
        r"""Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/organizations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_datacollectors_create(self, request: operations.ApigeeOrganizationsDatacollectorsCreateRequest) -> operations.ApigeeOrganizationsDatacollectorsCreateResponse:
        r"""Creates a new data collector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/datacollectors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDatacollectorsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DataCollector])
                res.google_cloud_apigee_v1_data_collector = out

        return res

    
    def apigee_organizations_datacollectors_list(self, request: operations.ApigeeOrganizationsDatacollectorsListRequest) -> operations.ApigeeOrganizationsDatacollectorsListResponse:
        r"""Lists all data collectors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/datacollectors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDatacollectorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDataCollectorsResponse])
                res.google_cloud_apigee_v1_list_data_collectors_response = out

        return res

    
    def apigee_organizations_developers_apps_attributes(self, request: operations.ApigeeOrganizationsDevelopersAppsAttributesRequest) -> operations.ApigeeOrganizationsDevelopersAppsAttributesResponse:
        r"""Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/attributes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Attributes])
                res.google_cloud_apigee_v1_attributes = out

        return res

    
    def apigee_organizations_developers_apps_create(self, request: operations.ApigeeOrganizationsDevelopersAppsCreateRequest) -> operations.ApigeeOrganizationsDevelopersAppsCreateResponse:
        r"""Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperApp])
                res.google_cloud_apigee_v1_developer_app = out

        return res

    
    def apigee_organizations_developers_apps_keys_create(self, request: operations.ApigeeOrganizationsDevelopersAppsKeysCreateRequest) -> operations.ApigeeOrganizationsDevelopersAppsKeysCreateResponse:
        r"""Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperAppKey])
                res.google_cloud_apigee_v1_developer_app_key = out

        return res

    
    def apigee_organizations_developers_apps_keys_create_create(self, request: operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest) -> operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse:
        r"""Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keys/create", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperAppKey])
                res.google_cloud_apigee_v1_developer_app_key = out

        return res

    
    def apigee_organizations_developers_apps_list(self, request: operations.ApigeeOrganizationsDevelopersAppsListRequest) -> operations.ApigeeOrganizationsDevelopersAppsListResponse:
        r"""Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDeveloperAppsResponse])
                res.google_cloud_apigee_v1_list_developer_apps_response = out

        return res

    
    def apigee_organizations_developers_attributes(self, request: operations.ApigeeOrganizationsDevelopersAttributesRequest) -> operations.ApigeeOrganizationsDevelopersAttributesResponse:
        r"""Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/attributes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Attributes])
                res.google_cloud_apigee_v1_attributes = out

        return res

    
    def apigee_organizations_developers_attributes_list(self, request: operations.ApigeeOrganizationsDevelopersAttributesListRequest) -> operations.ApigeeOrganizationsDevelopersAttributesListResponse:
        r"""Returns a list of all developer attributes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/attributes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAttributesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Attributes])
                res.google_cloud_apigee_v1_attributes = out

        return res

    
    def apigee_organizations_developers_balance_adjust(self, request: operations.ApigeeOrganizationsDevelopersBalanceAdjustRequest) -> operations.ApigeeOrganizationsDevelopersBalanceAdjustResponse:
        r"""Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:adjust", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersBalanceAdjustResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperBalance])
                res.google_cloud_apigee_v1_developer_balance = out

        return res

    
    def apigee_organizations_developers_balance_credit(self, request: operations.ApigeeOrganizationsDevelopersBalanceCreditRequest) -> operations.ApigeeOrganizationsDevelopersBalanceCreditResponse:
        r"""Credits the account balance for the developer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:credit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersBalanceCreditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperBalance])
                res.google_cloud_apigee_v1_developer_balance = out

        return res

    
    def apigee_organizations_developers_create(self, request: operations.ApigeeOrganizationsDevelopersCreateRequest) -> operations.ApigeeOrganizationsDevelopersCreateResponse:
        r"""Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/developers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Developer])
                res.google_cloud_apigee_v1_developer = out

        return res

    
    def apigee_organizations_developers_list(self, request: operations.ApigeeOrganizationsDevelopersListRequest) -> operations.ApigeeOrganizationsDevelopersListResponse:
        r"""Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/developers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListOfDevelopersResponse])
                res.google_cloud_apigee_v1_list_of_developers_response = out

        return res

    
    def apigee_organizations_developers_subscriptions_create(self, request: operations.ApigeeOrganizationsDevelopersSubscriptionsCreateRequest) -> operations.ApigeeOrganizationsDevelopersSubscriptionsCreateResponse:
        r"""Creates a subscription to an API product. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperSubscription])
                res.google_cloud_apigee_v1_developer_subscription = out

        return res

    
    def apigee_organizations_developers_subscriptions_expire(self, request: operations.ApigeeOrganizationsDevelopersSubscriptionsExpireRequest) -> operations.ApigeeOrganizationsDevelopersSubscriptionsExpireResponse:
        r"""Expires an API product subscription immediately.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:expire", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersSubscriptionsExpireResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperSubscription])
                res.google_cloud_apigee_v1_developer_subscription = out

        return res

    
    def apigee_organizations_developers_subscriptions_list(self, request: operations.ApigeeOrganizationsDevelopersSubscriptionsListRequest) -> operations.ApigeeOrganizationsDevelopersSubscriptionsListResponse:
        r"""Lists all API product subscriptions for a developer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse])
                res.google_cloud_apigee_v1_list_developer_subscriptions_response = out

        return res

    
    def apigee_organizations_endpoint_attachments_create(self, request: operations.ApigeeOrganizationsEndpointAttachmentsCreateRequest) -> operations.ApigeeOrganizationsEndpointAttachmentsCreateResponse:
        r"""Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/endpointAttachments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEndpointAttachmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_endpoint_attachments_list(self, request: operations.ApigeeOrganizationsEndpointAttachmentsListRequest) -> operations.ApigeeOrganizationsEndpointAttachmentsListResponse:
        r"""Lists the endpoint attachments in an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/endpointAttachments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEndpointAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEndpointAttachmentsResponse])
                res.google_cloud_apigee_v1_list_endpoint_attachments_response = out

        return res

    
    def apigee_organizations_envgroups_create(self, request: operations.ApigeeOrganizationsEnvgroupsCreateRequest) -> operations.ApigeeOrganizationsEnvgroupsCreateResponse:
        r"""Creates a new environment group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/envgroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvgroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_envgroups_list(self, request: operations.ApigeeOrganizationsEnvgroupsListRequest) -> operations.ApigeeOrganizationsEnvgroupsListResponse:
        r"""Lists all environment groups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/envgroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvgroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEnvironmentGroupsResponse])
                res.google_cloud_apigee_v1_list_environment_groups_response = out

        return res

    
    def apigee_organizations_environments_analytics_exports_create(self, request: operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse:
        r"""Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of \"enqueued\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/exports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Export])
                res.google_cloud_apigee_v1_export = out

        return res

    
    def apigee_organizations_environments_analytics_exports_list(self, request: operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest) -> operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse:
        r"""Lists the details and status of all analytics export jobs belonging to the parent organization and environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/exports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListExportsResponse])
                res.google_cloud_apigee_v1_list_exports_response = out

        return res

    
    def apigee_organizations_environments_apis_revisions_debugsessions_create(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse:
        r"""Creates a debug session for a deployed API Proxy revision.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/debugsessions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DebugSession])
                res.google_cloud_apigee_v1_debug_session = out

        return res

    
    def apigee_organizations_environments_apis_revisions_debugsessions_delete_data(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse:
        r"""Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/data", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def apigee_organizations_environments_apis_revisions_debugsessions_list(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListResponse:
        r"""Lists debug sessions that are currently active in the given API Proxy revision.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/debugsessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDebugSessionsResponse])
                res.google_cloud_apigee_v1_list_debug_sessions_response = out

        return res

    
    def apigee_organizations_environments_apis_revisions_deployments_generate_deploy_change_report(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse:
        r"""Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/deployments:generateDeployChangeReport", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeploymentChangeReport])
                res.google_cloud_apigee_v1_deployment_change_report = out

        return res

    
    def apigee_organizations_environments_apis_revisions_deployments_generate_undeploy_change_report(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse:
        r"""Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/deployments:generateUndeployChangeReport", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeploymentChangeReport])
                res.google_cloud_apigee_v1_deployment_change_report = out

        return res

    
    def apigee_organizations_environments_archive_deployments_create(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse:
        r"""Creates a new ArchiveDeployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/archiveDeployments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_environments_archive_deployments_generate_download_url(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadURLRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadURLResponse:
        r"""Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:generateDownloadUrl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1GenerateDownloadURLResponse])
                res.google_cloud_apigee_v1_generate_download_url_response = out

        return res

    
    def apigee_organizations_environments_archive_deployments_generate_upload_url(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadURLRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadURLResponse:
        r"""Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/archiveDeployments:generateUploadUrl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1GenerateUploadURLResponse])
                res.google_cloud_apigee_v1_generate_upload_url_response = out

        return res

    
    def apigee_organizations_environments_archive_deployments_list(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse:
        r"""Lists the ArchiveDeployments in the specified Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/archiveDeployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListArchiveDeploymentsResponse])
                res.google_cloud_apigee_v1_list_archive_deployments_response = out

        return res

    
    def apigee_organizations_environments_get_iam_policy(self, request: operations.ApigeeOrganizationsEnvironmentsGetIamPolicyRequest) -> operations.ApigeeOrganizationsEnvironmentsGetIamPolicyResponse:
        r"""Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def apigee_organizations_environments_keystores_aliases_create(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse:
        r"""Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/aliases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Alias])
                res.google_cloud_apigee_v1_alias = out

        return res

    
    def apigee_organizations_environments_keystores_aliases_csr(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse:
        r"""Generates a PKCS #10 Certificate Signing Request for the private key in an alias.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/csr", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def apigee_organizations_environments_keystores_aliases_get_certificate(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse:
        r"""Gets the certificate from an alias in PEM-encoded form.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/certificate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def apigee_organizations_environments_keystores_create(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresCreateResponse:
        r"""Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keystores", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Keystore])
                res.google_cloud_apigee_v1_keystore = out

        return res

    
    def apigee_organizations_environments_queries_create(self, request: operations.ApigeeOrganizationsEnvironmentsQueriesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsQueriesCreateResponse:
        r"""Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of \"enqueued\" means that the request succeeded.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/queries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsQueriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1AsyncQuery])
                res.google_cloud_apigee_v1_async_query = out

        return res

    
    def apigee_organizations_environments_queries_list(self, request: operations.ApigeeOrganizationsEnvironmentsQueriesListRequest) -> operations.ApigeeOrganizationsEnvironmentsQueriesListResponse:
        r"""Return a list of Asynchronous Queries
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/queries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsQueriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAsyncQueriesResponse])
                res.google_cloud_apigee_v1_list_async_queries_response = out

        return res

    
    def apigee_organizations_environments_references_create(self, request: operations.ApigeeOrganizationsEnvironmentsReferencesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsReferencesCreateResponse:
        r"""Creates a Reference in the specified environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/references", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsReferencesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Reference])
                res.google_cloud_apigee_v1_reference = out

        return res

    
    def apigee_organizations_environments_resourcefiles_create(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse:
        r"""Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ResourceFile])
                res.google_cloud_apigee_v1_resource_file = out

        return res

    
    def apigee_organizations_environments_resourcefiles_delete(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse:
        r"""Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ResourceFile])
                res.google_cloud_apigee_v1_resource_file = out

        return res

    
    def apigee_organizations_environments_resourcefiles_get(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesGetRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesGetResponse:
        r"""Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def apigee_organizations_environments_resourcefiles_list(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesListRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesListResponse:
        r"""Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse])
                res.google_cloud_apigee_v1_list_environment_resources_response = out

        return res

    
    def apigee_organizations_environments_resourcefiles_list_environment_resources(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse:
        r"""Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse])
                res.google_cloud_apigee_v1_list_environment_resources_response = out

        return res

    
    def apigee_organizations_environments_resourcefiles_update(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse:
        r"""Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ResourceFile])
                res.google_cloud_apigee_v1_resource_file = out

        return res

    
    def apigee_organizations_environments_security_reports_create(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateResponse:
        r"""Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of \"enqueued\" means that the request succeeded.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/securityReports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SecurityReport])
                res.google_cloud_apigee_v1_security_report = out

        return res

    
    def apigee_organizations_environments_security_reports_list(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityReportsListRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityReportsListResponse:
        r"""Return a list of Security Reports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/securityReports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityReportsResponse])
                res.google_cloud_apigee_v1_list_security_reports_response = out

        return res

    
    def apigee_organizations_environments_security_stats_query_tabular_stats(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse:
        r"""Retrieve security statistics as tabular rows.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{orgenv}/securityStats:queryTabularStats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1QueryTabularStatsResponse])
                res.google_cloud_apigee_v1_query_tabular_stats_response = out

        return res

    
    def apigee_organizations_environments_security_stats_query_time_series_stats(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsResponse:
        r"""Retrieve security statistics as a collection of time series.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{orgenv}/securityStats:queryTimeSeriesStats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1QueryTimeSeriesStatsResponse])
                res.google_cloud_apigee_v1_query_time_series_stats_response = out

        return res

    
    def apigee_organizations_environments_set_iam_policy(self, request: operations.ApigeeOrganizationsEnvironmentsSetIamPolicyRequest) -> operations.ApigeeOrganizationsEnvironmentsSetIamPolicyResponse:
        r"""Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def apigee_organizations_environments_sharedflows_revisions_deploy(self, request: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest) -> operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse:
        r"""Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Deployment])
                res.google_cloud_apigee_v1_deployment = out

        return res

    
    def apigee_organizations_environments_sharedflows_revisions_get_deployments(self, request: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest) -> operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse:
        r"""Gets the deployment of a shared flow revision and actual state reported by runtime pods.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Deployment])
                res.google_cloud_apigee_v1_deployment = out

        return res

    
    def apigee_organizations_environments_sharedflows_revisions_undeploy(self, request: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest) -> operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse:
        r"""Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def apigee_organizations_environments_subscribe(self, request: operations.ApigeeOrganizationsEnvironmentsSubscribeRequest) -> operations.ApigeeOrganizationsEnvironmentsSubscribeResponse:
        r"""Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The \"name\" and \"push_config\" must *not* be specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:subscribe", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Subscription])
                res.google_cloud_apigee_v1_subscription = out

        return res

    
    def apigee_organizations_environments_targetservers_create(self, request: operations.ApigeeOrganizationsEnvironmentsTargetserversCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsTargetserversCreateResponse:
        r"""Creates a TargetServer in the specified environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/targetservers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTargetserversCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1TargetServer])
                res.google_cloud_apigee_v1_target_server = out

        return res

    
    def apigee_organizations_environments_test_iam_permissions(self, request: operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest) -> operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsResponse:
        r"""Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1TestIamPermissionsResponse])
                res.google_iam_v1_test_iam_permissions_response = out

        return res

    
    def apigee_organizations_environments_trace_config_overrides_create(self, request: operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateResponse:
        r"""Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/overrides", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1TraceConfigOverride])
                res.google_cloud_apigee_v1_trace_config_override = out

        return res

    
    def apigee_organizations_environments_trace_config_overrides_list(self, request: operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest) -> operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse:
        r"""Lists all of the distributed trace configuration overrides in an environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/overrides", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListTraceConfigOverridesResponse])
                res.google_cloud_apigee_v1_list_trace_config_overrides_response = out

        return res

    
    def apigee_organizations_environments_unsubscribe(self, request: operations.ApigeeOrganizationsEnvironmentsUnsubscribeRequest) -> operations.ApigeeOrganizationsEnvironmentsUnsubscribeResponse:
        r"""Deletes a subscription for the environment's Pub/Sub topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:unsubscribe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def apigee_organizations_get_project_mapping(self, request: operations.ApigeeOrganizationsGetProjectMappingRequest) -> operations.ApigeeOrganizationsGetProjectMappingResponse:
        r"""Gets the project ID and region for an Apigee organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:getProjectMapping", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsGetProjectMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1OrganizationProjectMapping])
                res.google_cloud_apigee_v1_organization_project_mapping = out

        return res

    
    def apigee_organizations_get_sync_authorization(self, request: operations.ApigeeOrganizationsGetSyncAuthorizationRequest) -> operations.ApigeeOrganizationsGetSyncAuthorizationResponse:
        r"""Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:getSyncAuthorization", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsGetSyncAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SyncAuthorization])
                res.google_cloud_apigee_v1_sync_authorization = out

        return res

    
    def apigee_organizations_host_queries_create(self, request: operations.ApigeeOrganizationsHostQueriesCreateRequest) -> operations.ApigeeOrganizationsHostQueriesCreateResponse:
        r"""Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of \"enqueued\" means that the request succeeded.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/hostQueries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostQueriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1AsyncQuery])
                res.google_cloud_apigee_v1_async_query = out

        return res

    
    def apigee_organizations_host_queries_list(self, request: operations.ApigeeOrganizationsHostQueriesListRequest) -> operations.ApigeeOrganizationsHostQueriesListResponse:
        r"""Return a list of Asynchronous Queries at host level.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/hostQueries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostQueriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAsyncQueriesResponse])
                res.google_cloud_apigee_v1_list_async_queries_response = out

        return res

    
    def apigee_organizations_host_security_reports_create(self, request: operations.ApigeeOrganizationsHostSecurityReportsCreateRequest) -> operations.ApigeeOrganizationsHostSecurityReportsCreateResponse:
        r"""Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of \"enqueued\" means that the request succeeded.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/hostSecurityReports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostSecurityReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SecurityReport])
                res.google_cloud_apigee_v1_security_report = out

        return res

    
    def apigee_organizations_host_security_reports_list(self, request: operations.ApigeeOrganizationsHostSecurityReportsListRequest) -> operations.ApigeeOrganizationsHostSecurityReportsListResponse:
        r"""Return a list of Security Reports at host level.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/hostSecurityReports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostSecurityReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityReportsResponse])
                res.google_cloud_apigee_v1_list_security_reports_response = out

        return res

    
    def apigee_organizations_instances_attachments_create(self, request: operations.ApigeeOrganizationsInstancesAttachmentsCreateRequest) -> operations.ApigeeOrganizationsInstancesAttachmentsCreateResponse:
        r"""Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/attachments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesAttachmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_attachments_list(self, request: operations.ApigeeOrganizationsInstancesAttachmentsListRequest) -> operations.ApigeeOrganizationsInstancesAttachmentsListResponse:
        r"""Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/attachments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListInstanceAttachmentsResponse])
                res.google_cloud_apigee_v1_list_instance_attachments_response = out

        return res

    
    def apigee_organizations_instances_canaryevaluations_create(self, request: operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest) -> operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse:
        r"""Creates a new canary evaluation for an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/canaryevaluations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_create(self, request: operations.ApigeeOrganizationsInstancesCreateRequest) -> operations.ApigeeOrganizationsInstancesCreateResponse:
        r"""Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_list(self, request: operations.ApigeeOrganizationsInstancesListRequest) -> operations.ApigeeOrganizationsInstancesListResponse:
        r"""Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListInstancesResponse])
                res.google_cloud_apigee_v1_list_instances_response = out

        return res

    
    def apigee_organizations_instances_nat_addresses_activate(self, request: operations.ApigeeOrganizationsInstancesNatAddressesActivateRequest) -> operations.ApigeeOrganizationsInstancesNatAddressesActivateResponse:
        r"""Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesNatAddressesActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_nat_addresses_create(self, request: operations.ApigeeOrganizationsInstancesNatAddressesCreateRequest) -> operations.ApigeeOrganizationsInstancesNatAddressesCreateResponse:
        r"""Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/natAddresses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesNatAddressesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_nat_addresses_list(self, request: operations.ApigeeOrganizationsInstancesNatAddressesListRequest) -> operations.ApigeeOrganizationsInstancesNatAddressesListResponse:
        r"""Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/natAddresses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesNatAddressesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListNatAddressesResponse])
                res.google_cloud_apigee_v1_list_nat_addresses_response = out

        return res

    
    def apigee_organizations_instances_report_status(self, request: operations.ApigeeOrganizationsInstancesReportStatusRequest) -> operations.ApigeeOrganizationsInstancesReportStatusResponse:
        r"""Reports the latest status for a runtime instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{instance}:reportStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesReportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_apigee_v1_report_instance_status_response = out

        return res

    
    def apigee_organizations_keyvaluemaps_create(self, request: operations.ApigeeOrganizationsKeyvaluemapsCreateRequest) -> operations.ApigeeOrganizationsKeyvaluemapsCreateResponse:
        r"""Creates a key value map in an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keyvaluemaps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsKeyvaluemapsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1KeyValueMap])
                res.google_cloud_apigee_v1_key_value_map = out

        return res

    
    def apigee_organizations_keyvaluemaps_entries_create(self, request: operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest) -> operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateResponse:
        r"""Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1KeyValueEntry])
                res.google_cloud_apigee_v1_key_value_entry = out

        return res

    
    def apigee_organizations_keyvaluemaps_entries_list(self, request: operations.ApigeeOrganizationsKeyvaluemapsEntriesListRequest) -> operations.ApigeeOrganizationsKeyvaluemapsEntriesListResponse:
        r"""Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsKeyvaluemapsEntriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListKeyValueEntriesResponse])
                res.google_cloud_apigee_v1_list_key_value_entries_response = out

        return res

    
    def apigee_organizations_list(self, request: operations.ApigeeOrganizationsListRequest) -> operations.ApigeeOrganizationsListResponse:
        r"""Lists the Apigee organizations and associated GCP projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListOrganizationsResponse])
                res.google_cloud_apigee_v1_list_organizations_response = out

        return res

    
    def apigee_organizations_operations_list(self, request: operations.ApigeeOrganizationsOperationsListRequest) -> operations.ApigeeOrganizationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    
    def apigee_organizations_reports_create(self, request: operations.ApigeeOrganizationsReportsCreateRequest) -> operations.ApigeeOrganizationsReportsCreateResponse:
        r"""Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/reports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1CustomReport])
                res.google_cloud_apigee_v1_custom_report = out

        return res

    
    def apigee_organizations_reports_list(self, request: operations.ApigeeOrganizationsReportsListRequest) -> operations.ApigeeOrganizationsReportsListResponse:
        r"""Return a list of Custom Reports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListCustomReportsResponse])
                res.google_cloud_apigee_v1_list_custom_reports_response = out

        return res

    
    def apigee_organizations_reports_update(self, request: operations.ApigeeOrganizationsReportsUpdateRequest) -> operations.ApigeeOrganizationsReportsUpdateResponse:
        r"""Update an existing custom report definition
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsReportsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1CustomReport])
                res.google_cloud_apigee_v1_custom_report = out

        return res

    
    def apigee_organizations_security_profiles_environments_compute_environment_scores(self, request: operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest) -> operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse:
        r"""ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{profileEnvironment}:computeEnvironmentScores", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ComputeEnvironmentScoresResponse])
                res.google_cloud_apigee_v1_compute_environment_scores_response = out

        return res

    
    def apigee_organizations_security_profiles_environments_create(self, request: operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest) -> operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse:
        r"""CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/environments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation])
                res.google_cloud_apigee_v1_security_profile_environment_association = out

        return res

    
    def apigee_organizations_security_profiles_list(self, request: operations.ApigeeOrganizationsSecurityProfilesListRequest) -> operations.ApigeeOrganizationsSecurityProfilesListResponse:
        r"""ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/securityProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityProfilesResponse])
                res.google_cloud_apigee_v1_list_security_profiles_response = out

        return res

    
    def apigee_organizations_security_profiles_list_revisions(self, request: operations.ApigeeOrganizationsSecurityProfilesListRevisionsRequest) -> operations.ApigeeOrganizationsSecurityProfilesListRevisionsResponse:
        r"""ListSecurityProfileRevisions lists all the revisions of the security profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:listRevisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesListRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse])
                res.google_cloud_apigee_v1_list_security_profile_revisions_response = out

        return res

    
    def apigee_organizations_set_addons(self, request: operations.ApigeeOrganizationsSetAddonsRequest) -> operations.ApigeeOrganizationsSetAddonsResponse:
        r"""Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{org}:setAddons", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSetAddonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_set_sync_authorization(self, request: operations.ApigeeOrganizationsSetSyncAuthorizationRequest) -> operations.ApigeeOrganizationsSetSyncAuthorizationResponse:
        r"""Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setSyncAuthorization", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSetSyncAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SyncAuthorization])
                res.google_cloud_apigee_v1_sync_authorization = out

        return res

    
    def apigee_organizations_sharedflows_create(self, request: operations.ApigeeOrganizationsSharedflowsCreateRequest) -> operations.ApigeeOrganizationsSharedflowsCreateResponse:
        r"""Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/sharedflows", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SharedFlowRevision])
                res.google_cloud_apigee_v1_shared_flow_revision = out

        return res

    
    def apigee_organizations_sharedflows_list(self, request: operations.ApigeeOrganizationsSharedflowsListRequest) -> operations.ApigeeOrganizationsSharedflowsListResponse:
        r"""Lists all shared flows in the organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/sharedflows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSharedFlowsResponse])
                res.google_cloud_apigee_v1_list_shared_flows_response = out

        return res

    
    def apigee_organizations_sharedflows_revisions_deployments_list(self, request: operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest) -> operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListResponse:
        r"""Lists all deployments of a shared flow revision.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDeploymentsResponse])
                res.google_cloud_apigee_v1_list_deployments_response = out

        return res

    
    def apigee_organizations_sharedflows_revisions_update_shared_flow_revision(self, request: operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest) -> operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionResponse:
        r"""Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SharedFlowRevision])
                res.google_cloud_apigee_v1_shared_flow_revision = out

        return res

    
    def apigee_organizations_sites_apicategories_create(self, request: operations.ApigeeOrganizationsSitesApicategoriesCreateRequest) -> operations.ApigeeOrganizationsSitesApicategoriesCreateResponse:
        r"""Creates a new category on the portal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apicategories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APICategory])
                res.google_cloud_apigee_v1_api_category = out

        return res

    
    def apigee_organizations_sites_apicategories_delete(self, request: operations.ApigeeOrganizationsSitesApicategoriesDeleteRequest) -> operations.ApigeeOrganizationsSitesApicategoriesDeleteResponse:
        r"""Deletes a category from the portal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APIResponseWrapper])
                res.google_cloud_apigee_v1_api_response_wrapper = out

        return res

    
    def apigee_organizations_sites_apicategories_get(self, request: operations.ApigeeOrganizationsSitesApicategoriesGetRequest) -> operations.ApigeeOrganizationsSitesApicategoriesGetResponse:
        r"""Gets a category on the portal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APICategory])
                res.google_cloud_apigee_v1_api_category = out

        return res

    
    def apigee_organizations_sites_apicategories_list(self, request: operations.ApigeeOrganizationsSitesApicategoriesListRequest) -> operations.ApigeeOrganizationsSitesApicategoriesListResponse:
        r"""Lists the categories on the portal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apicategories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAPICategoriesResponse])
                res.google_cloud_apigee_v1_list_api_categories_response = out

        return res

    
    def apigee_organizations_sites_apicategories_patch(self, request: operations.ApigeeOrganizationsSitesApicategoriesPatchRequest) -> operations.ApigeeOrganizationsSitesApicategoriesPatchResponse:
        r"""Updates a category on the portal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APICategory])
                res.google_cloud_apigee_v1_api_category = out

        return res

    