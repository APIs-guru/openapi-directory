import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://apigee.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def apigee_organizations_analytics_datastores_create(self, request: operations.ApigeeOrganizationsAnalyticsDatastoresCreateRequest) -> operations.ApigeeOrganizationsAnalyticsDatastoresCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/datastores", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsAnalyticsDatastoresCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Datastore])
                res.google_cloud_apigee_v1_datastore = out

        return res

    
    def apigee_organizations_analytics_datastores_list(self, request: operations.ApigeeOrganizationsAnalyticsDatastoresListRequest) -> operations.ApigeeOrganizationsAnalyticsDatastoresListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/datastores", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsAnalyticsDatastoresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDatastoresResponse])
                res.google_cloud_apigee_v1_list_datastores_response = out

        return res

    
    def apigee_organizations_analytics_datastores_test(self, request: operations.ApigeeOrganizationsAnalyticsDatastoresTestRequest) -> operations.ApigeeOrganizationsAnalyticsDatastoresTestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/datastores:test", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsAnalyticsDatastoresTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1TestDatastoreResponse])
                res.google_cloud_apigee_v1_test_datastore_response = out

        return res

    
    def apigee_organizations_apiproducts_create(self, request: operations.ApigeeOrganizationsApiproductsCreateRequest) -> operations.ApigeeOrganizationsApiproductsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apiproducts", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APIProduct])
                res.google_cloud_apigee_v1_api_product = out

        return res

    
    def apigee_organizations_apiproducts_list(self, request: operations.ApigeeOrganizationsApiproductsListRequest) -> operations.ApigeeOrganizationsApiproductsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apiproducts", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAPIProductsResponse])
                res.google_cloud_apigee_v1_list_api_products_response = out

        return res

    
    def apigee_organizations_apiproducts_rateplans_create(self, request: operations.ApigeeOrganizationsApiproductsRateplansCreateRequest) -> operations.ApigeeOrganizationsApiproductsRateplansCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/rateplans", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsRateplansCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1RatePlan])
                res.google_cloud_apigee_v1_rate_plan = out

        return res

    
    def apigee_organizations_apiproducts_rateplans_list(self, request: operations.ApigeeOrganizationsApiproductsRateplansListRequest) -> operations.ApigeeOrganizationsApiproductsRateplansListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/rateplans", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApiproductsRateplansListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListRatePlansResponse])
                res.google_cloud_apigee_v1_list_rate_plans_response = out

        return res

    
    def apigee_organizations_apis_create(self, request: operations.ApigeeOrganizationsApisCreateRequest) -> operations.ApigeeOrganizationsApisCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apis", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApisCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APIProxyRevision])
                res.google_cloud_apigee_v1_api_proxy_revision = out

        return res

    
    def apigee_organizations_apis_list(self, request: operations.ApigeeOrganizationsApisListRequest) -> operations.ApigeeOrganizationsApisListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apis", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsApisListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAPIProxiesResponse])
                res.google_cloud_apigee_v1_list_api_proxies_response = out

        return res

    
    def apigee_organizations_create(self, request: operations.ApigeeOrganizationsCreateRequest) -> operations.ApigeeOrganizationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/organizations"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_datacollectors_create(self, request: operations.ApigeeOrganizationsDatacollectorsCreateRequest) -> operations.ApigeeOrganizationsDatacollectorsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/datacollectors", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDatacollectorsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DataCollector])
                res.google_cloud_apigee_v1_data_collector = out

        return res

    
    def apigee_organizations_datacollectors_list(self, request: operations.ApigeeOrganizationsDatacollectorsListRequest) -> operations.ApigeeOrganizationsDatacollectorsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/datacollectors", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDatacollectorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDataCollectorsResponse])
                res.google_cloud_apigee_v1_list_data_collectors_response = out

        return res

    
    def apigee_organizations_developers_apps_attributes(self, request: operations.ApigeeOrganizationsDevelopersAppsAttributesRequest) -> operations.ApigeeOrganizationsDevelopersAppsAttributesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/attributes", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Attributes])
                res.google_cloud_apigee_v1_attributes = out

        return res

    
    def apigee_organizations_developers_apps_create(self, request: operations.ApigeeOrganizationsDevelopersAppsCreateRequest) -> operations.ApigeeOrganizationsDevelopersAppsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apps", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperApp])
                res.google_cloud_apigee_v1_developer_app = out

        return res

    
    def apigee_organizations_developers_apps_keys_create(self, request: operations.ApigeeOrganizationsDevelopersAppsKeysCreateRequest) -> operations.ApigeeOrganizationsDevelopersAppsKeysCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/keys", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperAppKey])
                res.google_cloud_apigee_v1_developer_app_key = out

        return res

    
    def apigee_organizations_developers_apps_keys_create_create(self, request: operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest) -> operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/keys/create", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperAppKey])
                res.google_cloud_apigee_v1_developer_app_key = out

        return res

    
    def apigee_organizations_developers_apps_list(self, request: operations.ApigeeOrganizationsDevelopersAppsListRequest) -> operations.ApigeeOrganizationsDevelopersAppsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apps", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAppsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDeveloperAppsResponse])
                res.google_cloud_apigee_v1_list_developer_apps_response = out

        return res

    
    def apigee_organizations_developers_attributes(self, request: operations.ApigeeOrganizationsDevelopersAttributesRequest) -> operations.ApigeeOrganizationsDevelopersAttributesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/attributes", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Attributes])
                res.google_cloud_apigee_v1_attributes = out

        return res

    
    def apigee_organizations_developers_attributes_list(self, request: operations.ApigeeOrganizationsDevelopersAttributesListRequest) -> operations.ApigeeOrganizationsDevelopersAttributesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/attributes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersAttributesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Attributes])
                res.google_cloud_apigee_v1_attributes = out

        return res

    
    def apigee_organizations_developers_balance_adjust(self, request: operations.ApigeeOrganizationsDevelopersBalanceAdjustRequest) -> operations.ApigeeOrganizationsDevelopersBalanceAdjustResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:adjust", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersBalanceAdjustResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperBalance])
                res.google_cloud_apigee_v1_developer_balance = out

        return res

    
    def apigee_organizations_developers_balance_credit(self, request: operations.ApigeeOrganizationsDevelopersBalanceCreditRequest) -> operations.ApigeeOrganizationsDevelopersBalanceCreditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:credit", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersBalanceCreditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperBalance])
                res.google_cloud_apigee_v1_developer_balance = out

        return res

    
    def apigee_organizations_developers_create(self, request: operations.ApigeeOrganizationsDevelopersCreateRequest) -> operations.ApigeeOrganizationsDevelopersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/developers", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Developer])
                res.google_cloud_apigee_v1_developer = out

        return res

    
    def apigee_organizations_developers_list(self, request: operations.ApigeeOrganizationsDevelopersListRequest) -> operations.ApigeeOrganizationsDevelopersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/developers", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListOfDevelopersResponse])
                res.google_cloud_apigee_v1_list_of_developers_response = out

        return res

    
    def apigee_organizations_developers_subscriptions_create(self, request: operations.ApigeeOrganizationsDevelopersSubscriptionsCreateRequest) -> operations.ApigeeOrganizationsDevelopersSubscriptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperSubscription])
                res.google_cloud_apigee_v1_developer_subscription = out

        return res

    
    def apigee_organizations_developers_subscriptions_expire(self, request: operations.ApigeeOrganizationsDevelopersSubscriptionsExpireRequest) -> operations.ApigeeOrganizationsDevelopersSubscriptionsExpireResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:expire", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersSubscriptionsExpireResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeveloperSubscription])
                res.google_cloud_apigee_v1_developer_subscription = out

        return res

    
    def apigee_organizations_developers_subscriptions_list(self, request: operations.ApigeeOrganizationsDevelopersSubscriptionsListRequest) -> operations.ApigeeOrganizationsDevelopersSubscriptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsDevelopersSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse])
                res.google_cloud_apigee_v1_list_developer_subscriptions_response = out

        return res

    
    def apigee_organizations_endpoint_attachments_create(self, request: operations.ApigeeOrganizationsEndpointAttachmentsCreateRequest) -> operations.ApigeeOrganizationsEndpointAttachmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/endpointAttachments", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEndpointAttachmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_endpoint_attachments_list(self, request: operations.ApigeeOrganizationsEndpointAttachmentsListRequest) -> operations.ApigeeOrganizationsEndpointAttachmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/endpointAttachments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEndpointAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEndpointAttachmentsResponse])
                res.google_cloud_apigee_v1_list_endpoint_attachments_response = out

        return res

    
    def apigee_organizations_envgroups_create(self, request: operations.ApigeeOrganizationsEnvgroupsCreateRequest) -> operations.ApigeeOrganizationsEnvgroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/envgroups", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvgroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_envgroups_list(self, request: operations.ApigeeOrganizationsEnvgroupsListRequest) -> operations.ApigeeOrganizationsEnvgroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/envgroups", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvgroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEnvironmentGroupsResponse])
                res.google_cloud_apigee_v1_list_environment_groups_response = out

        return res

    
    def apigee_organizations_environments_analytics_exports_create(self, request: operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/exports", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Export])
                res.google_cloud_apigee_v1_export = out

        return res

    
    def apigee_organizations_environments_analytics_exports_list(self, request: operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest) -> operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/analytics/exports", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListExportsResponse])
                res.google_cloud_apigee_v1_list_exports_response = out

        return res

    
    def apigee_organizations_environments_apis_revisions_debugsessions_create(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/debugsessions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DebugSession])
                res.google_cloud_apigee_v1_debug_session = out

        return res

    
    def apigee_organizations_environments_apis_revisions_debugsessions_delete_data(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/data", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def apigee_organizations_environments_apis_revisions_debugsessions_list(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/debugsessions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDebugSessionsResponse])
                res.google_cloud_apigee_v1_list_debug_sessions_response = out

        return res

    
    def apigee_organizations_environments_apis_revisions_deployments_generate_deploy_change_report(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/deployments:generateDeployChangeReport", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeploymentChangeReport])
                res.google_cloud_apigee_v1_deployment_change_report = out

        return res

    
    def apigee_organizations_environments_apis_revisions_deployments_generate_undeploy_change_report(self, request: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest) -> operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/deployments:generateUndeployChangeReport", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1DeploymentChangeReport])
                res.google_cloud_apigee_v1_deployment_change_report = out

        return res

    
    def apigee_organizations_environments_archive_deployments_create(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/archiveDeployments", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_environments_archive_deployments_generate_download_url(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadURLRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadURLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:generateDownloadUrl", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1GenerateDownloadURLResponse])
                res.google_cloud_apigee_v1_generate_download_url_response = out

        return res

    
    def apigee_organizations_environments_archive_deployments_generate_upload_url(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadURLRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadURLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/archiveDeployments:generateUploadUrl", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1GenerateUploadURLResponse])
                res.google_cloud_apigee_v1_generate_upload_url_response = out

        return res

    
    def apigee_organizations_environments_archive_deployments_list(self, request: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest) -> operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/archiveDeployments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListArchiveDeploymentsResponse])
                res.google_cloud_apigee_v1_list_archive_deployments_response = out

        return res

    
    def apigee_organizations_environments_get_iam_policy(self, request: operations.ApigeeOrganizationsEnvironmentsGetIamPolicyRequest) -> operations.ApigeeOrganizationsEnvironmentsGetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def apigee_organizations_environments_keystores_aliases_create(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/aliases", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Alias])
                res.google_cloud_apigee_v1_alias = out

        return res

    
    def apigee_organizations_environments_keystores_aliases_csr(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/csr", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def apigee_organizations_environments_keystores_aliases_get_certificate(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/certificate", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def apigee_organizations_environments_keystores_create(self, request: operations.ApigeeOrganizationsEnvironmentsKeystoresCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsKeystoresCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/keystores", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsKeystoresCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Keystore])
                res.google_cloud_apigee_v1_keystore = out

        return res

    
    def apigee_organizations_environments_queries_create(self, request: operations.ApigeeOrganizationsEnvironmentsQueriesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsQueriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/queries", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsQueriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1AsyncQuery])
                res.google_cloud_apigee_v1_async_query = out

        return res

    
    def apigee_organizations_environments_queries_list(self, request: operations.ApigeeOrganizationsEnvironmentsQueriesListRequest) -> operations.ApigeeOrganizationsEnvironmentsQueriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/queries", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsQueriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAsyncQueriesResponse])
                res.google_cloud_apigee_v1_list_async_queries_response = out

        return res

    
    def apigee_organizations_environments_references_create(self, request: operations.ApigeeOrganizationsEnvironmentsReferencesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsReferencesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/references", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsReferencesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Reference])
                res.google_cloud_apigee_v1_reference = out

        return res

    
    def apigee_organizations_environments_resourcefiles_create(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ResourceFile])
                res.google_cloud_apigee_v1_resource_file = out

        return res

    
    def apigee_organizations_environments_resourcefiles_delete(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ResourceFile])
                res.google_cloud_apigee_v1_resource_file = out

        return res

    
    def apigee_organizations_environments_resourcefiles_get(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesGetRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def apigee_organizations_environments_resourcefiles_list(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesListRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse])
                res.google_cloud_apigee_v1_list_environment_resources_response = out

        return res

    
    def apigee_organizations_environments_resourcefiles_list_environment_resources(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse])
                res.google_cloud_apigee_v1_list_environment_resources_response = out

        return res

    
    def apigee_organizations_environments_resourcefiles_update(self, request: operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest) -> operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/resourcefiles/{type}/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ResourceFile])
                res.google_cloud_apigee_v1_resource_file = out

        return res

    
    def apigee_organizations_environments_security_reports_create(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/securityReports", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SecurityReport])
                res.google_cloud_apigee_v1_security_report = out

        return res

    
    def apigee_organizations_environments_security_reports_list(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityReportsListRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityReportsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/securityReports", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityReportsResponse])
                res.google_cloud_apigee_v1_list_security_reports_response = out

        return res

    
    def apigee_organizations_environments_security_stats_query_tabular_stats(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{orgenv}/securityStats:queryTabularStats", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1QueryTabularStatsResponse])
                res.google_cloud_apigee_v1_query_tabular_stats_response = out

        return res

    
    def apigee_organizations_environments_security_stats_query_time_series_stats(self, request: operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest) -> operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{orgenv}/securityStats:queryTimeSeriesStats", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1QueryTimeSeriesStatsResponse])
                res.google_cloud_apigee_v1_query_time_series_stats_response = out

        return res

    
    def apigee_organizations_environments_set_iam_policy(self, request: operations.ApigeeOrganizationsEnvironmentsSetIamPolicyRequest) -> operations.ApigeeOrganizationsEnvironmentsSetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def apigee_organizations_environments_sharedflows_revisions_deploy(self, request: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest) -> operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/deployments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Deployment])
                res.google_cloud_apigee_v1_deployment = out

        return res

    
    def apigee_organizations_environments_sharedflows_revisions_get_deployments(self, request: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest) -> operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/deployments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Deployment])
                res.google_cloud_apigee_v1_deployment = out

        return res

    
    def apigee_organizations_environments_sharedflows_revisions_undeploy(self, request: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest) -> operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/deployments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def apigee_organizations_environments_subscribe(self, request: operations.ApigeeOrganizationsEnvironmentsSubscribeRequest) -> operations.ApigeeOrganizationsEnvironmentsSubscribeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}:subscribe", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsSubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1Subscription])
                res.google_cloud_apigee_v1_subscription = out

        return res

    
    def apigee_organizations_environments_targetservers_create(self, request: operations.ApigeeOrganizationsEnvironmentsTargetserversCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsTargetserversCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/targetservers", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTargetserversCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1TargetServer])
                res.google_cloud_apigee_v1_target_server = out

        return res

    
    def apigee_organizations_environments_test_iam_permissions(self, request: operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest) -> operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1TestIamPermissionsResponse])
                res.google_iam_v1_test_iam_permissions_response = out

        return res

    
    def apigee_organizations_environments_trace_config_overrides_create(self, request: operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest) -> operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/overrides", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1TraceConfigOverride])
                res.google_cloud_apigee_v1_trace_config_override = out

        return res

    
    def apigee_organizations_environments_trace_config_overrides_list(self, request: operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest) -> operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/overrides", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListTraceConfigOverridesResponse])
                res.google_cloud_apigee_v1_list_trace_config_overrides_response = out

        return res

    
    def apigee_organizations_environments_unsubscribe(self, request: operations.ApigeeOrganizationsEnvironmentsUnsubscribeRequest) -> operations.ApigeeOrganizationsEnvironmentsUnsubscribeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}:unsubscribe", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsEnvironmentsUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def apigee_organizations_get_project_mapping(self, request: operations.ApigeeOrganizationsGetProjectMappingRequest) -> operations.ApigeeOrganizationsGetProjectMappingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:getProjectMapping", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsGetProjectMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1OrganizationProjectMapping])
                res.google_cloud_apigee_v1_organization_project_mapping = out

        return res

    
    def apigee_organizations_get_sync_authorization(self, request: operations.ApigeeOrganizationsGetSyncAuthorizationRequest) -> operations.ApigeeOrganizationsGetSyncAuthorizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:getSyncAuthorization", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsGetSyncAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SyncAuthorization])
                res.google_cloud_apigee_v1_sync_authorization = out

        return res

    
    def apigee_organizations_host_queries_create(self, request: operations.ApigeeOrganizationsHostQueriesCreateRequest) -> operations.ApigeeOrganizationsHostQueriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/hostQueries", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostQueriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1AsyncQuery])
                res.google_cloud_apigee_v1_async_query = out

        return res

    
    def apigee_organizations_host_queries_list(self, request: operations.ApigeeOrganizationsHostQueriesListRequest) -> operations.ApigeeOrganizationsHostQueriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/hostQueries", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostQueriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAsyncQueriesResponse])
                res.google_cloud_apigee_v1_list_async_queries_response = out

        return res

    
    def apigee_organizations_host_security_reports_create(self, request: operations.ApigeeOrganizationsHostSecurityReportsCreateRequest) -> operations.ApigeeOrganizationsHostSecurityReportsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/hostSecurityReports", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostSecurityReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SecurityReport])
                res.google_cloud_apigee_v1_security_report = out

        return res

    
    def apigee_organizations_host_security_reports_list(self, request: operations.ApigeeOrganizationsHostSecurityReportsListRequest) -> operations.ApigeeOrganizationsHostSecurityReportsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/hostSecurityReports", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsHostSecurityReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityReportsResponse])
                res.google_cloud_apigee_v1_list_security_reports_response = out

        return res

    
    def apigee_organizations_instances_attachments_create(self, request: operations.ApigeeOrganizationsInstancesAttachmentsCreateRequest) -> operations.ApigeeOrganizationsInstancesAttachmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/attachments", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesAttachmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_attachments_list(self, request: operations.ApigeeOrganizationsInstancesAttachmentsListRequest) -> operations.ApigeeOrganizationsInstancesAttachmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/attachments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListInstanceAttachmentsResponse])
                res.google_cloud_apigee_v1_list_instance_attachments_response = out

        return res

    
    def apigee_organizations_instances_canaryevaluations_create(self, request: operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest) -> operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/canaryevaluations", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_create(self, request: operations.ApigeeOrganizationsInstancesCreateRequest) -> operations.ApigeeOrganizationsInstancesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/instances", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_list(self, request: operations.ApigeeOrganizationsInstancesListRequest) -> operations.ApigeeOrganizationsInstancesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/instances", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListInstancesResponse])
                res.google_cloud_apigee_v1_list_instances_response = out

        return res

    
    def apigee_organizations_instances_nat_addresses_activate(self, request: operations.ApigeeOrganizationsInstancesNatAddressesActivateRequest) -> operations.ApigeeOrganizationsInstancesNatAddressesActivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:activate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesNatAddressesActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_nat_addresses_create(self, request: operations.ApigeeOrganizationsInstancesNatAddressesCreateRequest) -> operations.ApigeeOrganizationsInstancesNatAddressesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/natAddresses", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesNatAddressesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_instances_nat_addresses_list(self, request: operations.ApigeeOrganizationsInstancesNatAddressesListRequest) -> operations.ApigeeOrganizationsInstancesNatAddressesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/natAddresses", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesNatAddressesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListNatAddressesResponse])
                res.google_cloud_apigee_v1_list_nat_addresses_response = out

        return res

    
    def apigee_organizations_instances_report_status(self, request: operations.ApigeeOrganizationsInstancesReportStatusRequest) -> operations.ApigeeOrganizationsInstancesReportStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{instance}:reportStatus", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsInstancesReportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_apigee_v1_report_instance_status_response = out

        return res

    
    def apigee_organizations_keyvaluemaps_create(self, request: operations.ApigeeOrganizationsKeyvaluemapsCreateRequest) -> operations.ApigeeOrganizationsKeyvaluemapsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/keyvaluemaps", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsKeyvaluemapsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1KeyValueMap])
                res.google_cloud_apigee_v1_key_value_map = out

        return res

    
    def apigee_organizations_keyvaluemaps_entries_create(self, request: operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest) -> operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/entries", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1KeyValueEntry])
                res.google_cloud_apigee_v1_key_value_entry = out

        return res

    
    def apigee_organizations_keyvaluemaps_entries_list(self, request: operations.ApigeeOrganizationsKeyvaluemapsEntriesListRequest) -> operations.ApigeeOrganizationsKeyvaluemapsEntriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/entries", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsKeyvaluemapsEntriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListKeyValueEntriesResponse])
                res.google_cloud_apigee_v1_list_key_value_entries_response = out

        return res

    
    def apigee_organizations_list(self, request: operations.ApigeeOrganizationsListRequest) -> operations.ApigeeOrganizationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListOrganizationsResponse])
                res.google_cloud_apigee_v1_list_organizations_response = out

        return res

    
    def apigee_organizations_operations_list(self, request: operations.ApigeeOrganizationsOperationsListRequest) -> operations.ApigeeOrganizationsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    
    def apigee_organizations_reports_create(self, request: operations.ApigeeOrganizationsReportsCreateRequest) -> operations.ApigeeOrganizationsReportsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/reports", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1CustomReport])
                res.google_cloud_apigee_v1_custom_report = out

        return res

    
    def apigee_organizations_reports_list(self, request: operations.ApigeeOrganizationsReportsListRequest) -> operations.ApigeeOrganizationsReportsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/reports", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListCustomReportsResponse])
                res.google_cloud_apigee_v1_list_custom_reports_response = out

        return res

    
    def apigee_organizations_reports_update(self, request: operations.ApigeeOrganizationsReportsUpdateRequest) -> operations.ApigeeOrganizationsReportsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsReportsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1CustomReport])
                res.google_cloud_apigee_v1_custom_report = out

        return res

    
    def apigee_organizations_security_profiles_environments_compute_environment_scores(self, request: operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest) -> operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{profileEnvironment}:computeEnvironmentScores", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ComputeEnvironmentScoresResponse])
                res.google_cloud_apigee_v1_compute_environment_scores_response = out

        return res

    
    def apigee_organizations_security_profiles_environments_create(self, request: operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest) -> operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/environments", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation])
                res.google_cloud_apigee_v1_security_profile_environment_association = out

        return res

    
    def apigee_organizations_security_profiles_list(self, request: operations.ApigeeOrganizationsSecurityProfilesListRequest) -> operations.ApigeeOrganizationsSecurityProfilesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/securityProfiles", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityProfilesResponse])
                res.google_cloud_apigee_v1_list_security_profiles_response = out

        return res

    
    def apigee_organizations_security_profiles_list_revisions(self, request: operations.ApigeeOrganizationsSecurityProfilesListRevisionsRequest) -> operations.ApigeeOrganizationsSecurityProfilesListRevisionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:listRevisions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSecurityProfilesListRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse])
                res.google_cloud_apigee_v1_list_security_profile_revisions_response = out

        return res

    
    def apigee_organizations_set_addons(self, request: operations.ApigeeOrganizationsSetAddonsRequest) -> operations.ApigeeOrganizationsSetAddonsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{org}:setAddons", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSetAddonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def apigee_organizations_set_sync_authorization(self, request: operations.ApigeeOrganizationsSetSyncAuthorizationRequest) -> operations.ApigeeOrganizationsSetSyncAuthorizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:setSyncAuthorization", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSetSyncAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SyncAuthorization])
                res.google_cloud_apigee_v1_sync_authorization = out

        return res

    
    def apigee_organizations_sharedflows_create(self, request: operations.ApigeeOrganizationsSharedflowsCreateRequest) -> operations.ApigeeOrganizationsSharedflowsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/sharedflows", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SharedFlowRevision])
                res.google_cloud_apigee_v1_shared_flow_revision = out

        return res

    
    def apigee_organizations_sharedflows_list(self, request: operations.ApigeeOrganizationsSharedflowsListRequest) -> operations.ApigeeOrganizationsSharedflowsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/sharedflows", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListSharedFlowsResponse])
                res.google_cloud_apigee_v1_list_shared_flows_response = out

        return res

    
    def apigee_organizations_sharedflows_revisions_deployments_list(self, request: operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest) -> operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/deployments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListDeploymentsResponse])
                res.google_cloud_apigee_v1_list_deployments_response = out

        return res

    
    def apigee_organizations_sharedflows_revisions_update_shared_flow_revision(self, request: operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest) -> operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1SharedFlowRevision])
                res.google_cloud_apigee_v1_shared_flow_revision = out

        return res

    
    def apigee_organizations_sites_apicategories_create(self, request: operations.ApigeeOrganizationsSitesApicategoriesCreateRequest) -> operations.ApigeeOrganizationsSitesApicategoriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apicategories", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APICategory])
                res.google_cloud_apigee_v1_api_category = out

        return res

    
    def apigee_organizations_sites_apicategories_delete(self, request: operations.ApigeeOrganizationsSitesApicategoriesDeleteRequest) -> operations.ApigeeOrganizationsSitesApicategoriesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APIResponseWrapper])
                res.google_cloud_apigee_v1_api_response_wrapper = out

        return res

    
    def apigee_organizations_sites_apicategories_get(self, request: operations.ApigeeOrganizationsSitesApicategoriesGetRequest) -> operations.ApigeeOrganizationsSitesApicategoriesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APICategory])
                res.google_cloud_apigee_v1_api_category = out

        return res

    
    def apigee_organizations_sites_apicategories_list(self, request: operations.ApigeeOrganizationsSitesApicategoriesListRequest) -> operations.ApigeeOrganizationsSitesApicategoriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/apicategories", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1ListAPICategoriesResponse])
                res.google_cloud_apigee_v1_list_api_categories_response = out

        return res

    
    def apigee_organizations_sites_apicategories_patch(self, request: operations.ApigeeOrganizationsSitesApicategoriesPatchRequest) -> operations.ApigeeOrganizationsSitesApicategoriesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeOrganizationsSitesApicategoriesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudApigeeV1APICategory])
                res.google_cloud_apigee_v1_api_category = out

        return res

    
    def apigee_projects_provision_organization(self, request: operations.ApigeeProjectsProvisionOrganizationRequest) -> operations.ApigeeProjectsProvisionOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{project}:provisionOrganization", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeProjectsProvisionOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    