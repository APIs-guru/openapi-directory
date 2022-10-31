import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.ebay.com{basePath}",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def create_fulfillment_policy(self, request: operations.CreateFulfillmentPolicyRequest) -> operations.CreateFulfillmentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fulfillment_policy"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFulfillmentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetFulfillmentPolicyResponse])
                res.set_fulfillment_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_or_replace_sales_tax(self, request: operations.CreateOrReplaceSalesTaxRequest) -> operations.CreateOrReplaceSalesTaxResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sales_tax/{countryCode}/{jurisdictionId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrReplaceSalesTaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_payment_policy(self, request: operations.CreatePaymentPolicyRequest) -> operations.CreatePaymentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/payment_policy"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePaymentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetPaymentPolicyResponse])
                res.set_payment_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_return_policy(self, request: operations.CreateReturnPolicyRequest) -> operations.CreateReturnPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/return_policy"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateReturnPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetReturnPolicyResponse])
                res.set_return_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_fulfillment_policy(self, request: operations.DeleteFulfillmentPolicyRequest) -> operations.DeleteFulfillmentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/fulfillment_policy/{fulfillmentPolicyId}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFulfillmentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_payment_policy(self, request: operations.DeletePaymentPolicyRequest) -> operations.DeletePaymentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/payment_policy/{payment_policy_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePaymentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_return_policy(self, request: operations.DeleteReturnPolicyRequest) -> operations.DeleteReturnPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/return_policy/{return_policy_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteReturnPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_sales_tax(self, request: operations.DeleteSalesTaxRequest) -> operations.DeleteSalesTaxResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sales_tax/{countryCode}/{jurisdictionId}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSalesTaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_fulfillment_policies(self, request: operations.GetFulfillmentPoliciesRequest) -> operations.GetFulfillmentPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fulfillment_policy"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFulfillmentPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FulfillmentPolicyResponse])
                res.fulfillment_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_fulfillment_policy(self, request: operations.GetFulfillmentPolicyRequest) -> operations.GetFulfillmentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/fulfillment_policy/{fulfillmentPolicyId}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFulfillmentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FulfillmentPolicy])
                res.fulfillment_policy = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_fulfillment_policy_by_name(self, request: operations.GetFulfillmentPolicyByNameRequest) -> operations.GetFulfillmentPolicyByNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fulfillment_policy/get_by_policy_name"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFulfillmentPolicyByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FulfillmentPolicy])
                res.fulfillment_policy = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_kyc(self, request: operations.GetKycRequest) -> operations.GetKycResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/kyc"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKycResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KycResponse])
                res.kyc_response = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_opted_in_programs(self, request: operations.GetOptedInProgramsRequest) -> operations.GetOptedInProgramsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/program/get_opted_in_programs"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOptedInProgramsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Programs])
                res.programs = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_payment_policies(self, request: operations.GetPaymentPoliciesRequest) -> operations.GetPaymentPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/payment_policy"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentPolicyResponse])
                res.payment_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_payment_policy(self, request: operations.GetPaymentPolicyRequest) -> operations.GetPaymentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/payment_policy/{payment_policy_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentPolicy])
                res.payment_policy = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_payment_policy_by_name(self, request: operations.GetPaymentPolicyByNameRequest) -> operations.GetPaymentPolicyByNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/payment_policy/get_by_policy_name"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentPolicyByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentPolicy])
                res.payment_policy = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_payments_program(self, request: operations.GetPaymentsProgramRequest) -> operations.GetPaymentsProgramResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/payments_program/{marketplace_id}/{payments_program_type}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentsProgramResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentsProgramResponse])
                res.payments_program_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_payments_program_onboarding(self, request: operations.GetPaymentsProgramOnboardingRequest) -> operations.GetPaymentsProgramOnboardingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/payments_program/{marketplace_id}/{payments_program_type}/onboarding", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentsProgramOnboardingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentsProgramOnboardingResponse])
                res.payments_program_onboarding_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_privileges(self, request: operations.GetPrivilegesRequest) -> operations.GetPrivilegesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/privilege"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrivilegesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SellingPrivileges])
                res.selling_privileges = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_rate_tables(self, request: operations.GetRateTablesRequest) -> operations.GetRateTablesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rate_table"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRateTablesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RateTableResponse])
                res.rate_table_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_return_policies(self, request: operations.GetReturnPoliciesRequest) -> operations.GetReturnPoliciesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/return_policy"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturnPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReturnPolicyResponse])
                res.return_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_return_policy(self, request: operations.GetReturnPolicyRequest) -> operations.GetReturnPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/return_policy/{return_policy_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturnPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReturnPolicy])
                res.return_policy = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_return_policy_by_name(self, request: operations.GetReturnPolicyByNameRequest) -> operations.GetReturnPolicyByNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/return_policy/get_by_policy_name"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturnPolicyByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReturnPolicy])
                res.return_policy = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_sales_tax(self, request: operations.GetSalesTaxRequest) -> operations.GetSalesTaxResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sales_tax/{countryCode}/{jurisdictionId}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesTaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SalesTax])
                res.sales_tax = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_sales_taxes(self, request: operations.GetSalesTaxesRequest) -> operations.GetSalesTaxesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/sales_tax"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesTaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SalesTaxes])
                res.sales_taxes = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def opt_in_to_program(self, request: operations.OptInToProgramRequest) -> operations.OptInToProgramResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/program/opt_in"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OptInToProgramResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.opt_in_to_program_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def opt_out_of_program(self, request: operations.OptOutOfProgramRequest) -> operations.OptOutOfProgramResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/program/opt_out"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OptOutOfProgramResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.opt_out_of_program_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_fulfillment_policy(self, request: operations.UpdateFulfillmentPolicyRequest) -> operations.UpdateFulfillmentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/fulfillment_policy/{fulfillmentPolicyId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFulfillmentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetFulfillmentPolicyResponse])
                res.set_fulfillment_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_payment_policy(self, request: operations.UpdatePaymentPolicyRequest) -> operations.UpdatePaymentPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/payment_policy/{payment_policy_id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePaymentPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetPaymentPolicyResponse])
                res.set_payment_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_return_policy(self, request: operations.UpdateReturnPolicyRequest) -> operations.UpdateReturnPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/return_policy/{return_policy_id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateReturnPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetReturnPolicyResponse])
                res.set_return_policy_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    