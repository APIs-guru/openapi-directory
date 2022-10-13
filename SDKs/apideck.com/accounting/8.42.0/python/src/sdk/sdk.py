import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://unify.apideck.com",
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

    
    def balance_sheet_one(self, request: operations.BalanceSheetOneRequest) -> operations.BalanceSheetOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BalanceSheetOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBalanceSheetResponse])
                res.responses[r.status_code][content_type] = operations.BalanceSheetOneResponses(get_balance_sheet_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BalanceSheetOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BalanceSheetOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BalanceSheetOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BalanceSheetOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BalanceSheetOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BalanceSheetOneResponses(unexpected_error_response=out)

        return res

    
    def bills_add(self, request: operations.BillsAddRequest) -> operations.BillsAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillsAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateBillResponse])
                res.responses[r.status_code][content_type] = operations.BillsAddResponses(create_bill_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAddResponses(unexpected_error_response=out)

        return res

    
    def bills_all(self, request: operations.BillsAllRequest) -> operations.BillsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BillsAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBillsResponse])
                res.responses[r.status_code][content_type] = operations.BillsAllResponses(get_bills_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsAllResponses(unexpected_error_response=out)

        return res

    
    def bills_delete(self, request: operations.BillsDeleteRequest) -> operations.BillsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/bills/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BillsDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteBillResponse])
                res.responses[r.status_code][content_type] = operations.BillsDeleteResponses(delete_bill_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsDeleteResponses(unexpected_error_response=out)

        return res

    
    def bills_one(self, request: operations.BillsOneRequest) -> operations.BillsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/bills/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BillsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBillResponse])
                res.responses[r.status_code][content_type] = operations.BillsOneResponses(get_bill_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsOneResponses(unexpected_error_response=out)

        return res

    
    def bills_update(self, request: operations.BillsUpdateRequest) -> operations.BillsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/bills/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillsUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateBillResponse])
                res.responses[r.status_code][content_type] = operations.BillsUpdateResponses(update_bill_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.BillsUpdateResponses(unexpected_error_response=out)

        return res

    
    def company_info_one(self, request: operations.CompanyInfoOneRequest) -> operations.CompanyInfoOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyInfoOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCompanyInfoResponse])
                res.responses[r.status_code][content_type] = operations.CompanyInfoOneResponses(get_company_info_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CompanyInfoOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CompanyInfoOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CompanyInfoOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CompanyInfoOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CompanyInfoOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CompanyInfoOneResponses(unexpected_error_response=out)

        return res

    
    def credit_notes_add(self, request: operations.CreditNotesAddRequest) -> operations.CreditNotesAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreditNotesAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateCreditNoteResponse])
                res.responses[r.status_code][content_type] = operations.CreditNotesAddResponses(create_credit_note_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAddResponses(unexpected_error_response=out)

        return res

    
    def credit_notes_all(self, request: operations.CreditNotesAllRequest) -> operations.CreditNotesAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreditNotesAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditNotesResponse])
                res.responses[r.status_code][content_type] = operations.CreditNotesAllResponses(get_credit_notes_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesAllResponses(unexpected_error_response=out)

        return res

    
    def credit_notes_delete(self, request: operations.CreditNotesDeleteRequest) -> operations.CreditNotesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/credit-notes/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreditNotesDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteCreditNoteResponse])
                res.responses[r.status_code][content_type] = operations.CreditNotesDeleteResponses(delete_credit_note_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesDeleteResponses(unexpected_error_response=out)

        return res

    
    def credit_notes_one(self, request: operations.CreditNotesOneRequest) -> operations.CreditNotesOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/credit-notes/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreditNotesOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCreditNoteResponse])
                res.responses[r.status_code][content_type] = operations.CreditNotesOneResponses(get_credit_note_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesOneResponses(unexpected_error_response=out)

        return res

    
    def credit_notes_update(self, request: operations.CreditNotesUpdateRequest) -> operations.CreditNotesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/credit-notes/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreditNotesUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateCreditNoteResponse])
                res.responses[r.status_code][content_type] = operations.CreditNotesUpdateResponses(update_credit_note_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreditNotesUpdateResponses(unexpected_error_response=out)

        return res

    
    def customers_add(self, request: operations.CustomersAddRequest) -> operations.CustomersAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateCustomerResponse])
                res.responses[r.status_code][content_type] = operations.CustomersAddResponses(create_customer_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAddResponses(unexpected_error_response=out)

        return res

    
    def customers_all(self, request: operations.CustomersAllRequest) -> operations.CustomersAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomersResponse])
                res.responses[r.status_code][content_type] = operations.CustomersAllResponses(get_customers_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersAllResponses(unexpected_error_response=out)

        return res

    
    def customers_delete(self, request: operations.CustomersDeleteRequest) -> operations.CustomersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/customers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteCustomerResponse])
                res.responses[r.status_code][content_type] = operations.CustomersDeleteResponses(delete_customer_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersDeleteResponses(unexpected_error_response=out)

        return res

    
    def customers_one(self, request: operations.CustomersOneRequest) -> operations.CustomersOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/customers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomerResponse])
                res.responses[r.status_code][content_type] = operations.CustomersOneResponses(get_customer_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersOneResponses(unexpected_error_response=out)

        return res

    
    def customers_update(self, request: operations.CustomersUpdateRequest) -> operations.CustomersUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/customers/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateCustomerResponse])
                res.responses[r.status_code][content_type] = operations.CustomersUpdateResponses(update_customer_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CustomersUpdateResponses(unexpected_error_response=out)

        return res

    
    def invoice_items_add(self, request: operations.InvoiceItemsAddRequest) -> operations.InvoiceItemsAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceItemsAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateInvoiceItemResponse])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAddResponses(create_invoice_item_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAddResponses(unexpected_error_response=out)

        return res

    
    def invoice_items_all(self, request: operations.InvoiceItemsAllRequest) -> operations.InvoiceItemsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceItemsAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetInvoiceItemsResponse])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAllResponses(get_invoice_items_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsAllResponses(unexpected_error_response=out)

        return res

    
    def invoice_items_delete(self, request: operations.InvoiceItemsDeleteRequest) -> operations.InvoiceItemsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/invoice-items/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceItemsDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteTaxRateResponse])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsDeleteResponses(delete_tax_rate_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsDeleteResponses(unexpected_error_response=out)

        return res

    
    def invoice_items_one(self, request: operations.InvoiceItemsOneRequest) -> operations.InvoiceItemsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/invoice-items/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceItemsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetInvoiceItemResponse])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsOneResponses(get_invoice_item_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsOneResponses(unexpected_error_response=out)

        return res

    
    def invoice_items_update(self, request: operations.InvoiceItemsUpdateRequest) -> operations.InvoiceItemsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/invoice-items/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceItemsUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateInvoiceItemsResponse])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsUpdateResponses(update_invoice_items_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoiceItemsUpdateResponses(unexpected_error_response=out)

        return res

    
    def invoices_add(self, request: operations.InvoicesAddRequest) -> operations.InvoicesAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoicesAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateInvoiceResponse])
                res.responses[r.status_code][content_type] = operations.InvoicesAddResponses(create_invoice_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAddResponses(unexpected_error_response=out)

        return res

    
    def invoices_all(self, request: operations.InvoicesAllRequest) -> operations.InvoicesAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoicesAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetInvoicesResponse])
                res.responses[r.status_code][content_type] = operations.InvoicesAllResponses(get_invoices_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesAllResponses(unexpected_error_response=out)

        return res

    
    def invoices_delete(self, request: operations.InvoicesDeleteRequest) -> operations.InvoicesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/invoices/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoicesDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteInvoiceResponse])
                res.responses[r.status_code][content_type] = operations.InvoicesDeleteResponses(delete_invoice_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesDeleteResponses(unexpected_error_response=out)

        return res

    
    def invoices_one(self, request: operations.InvoicesOneRequest) -> operations.InvoicesOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/invoices/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoicesOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetInvoiceResponse])
                res.responses[r.status_code][content_type] = operations.InvoicesOneResponses(get_invoice_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesOneResponses(unexpected_error_response=out)

        return res

    
    def invoices_update(self, request: operations.InvoicesUpdateRequest) -> operations.InvoicesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/invoices/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoicesUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateInvoiceResponse])
                res.responses[r.status_code][content_type] = operations.InvoicesUpdateResponses(update_invoice_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.InvoicesUpdateResponses(unexpected_error_response=out)

        return res

    
    def ledger_accounts_add(self, request: operations.LedgerAccountsAddRequest) -> operations.LedgerAccountsAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LedgerAccountsAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateLedgerAccountResponse])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAddResponses(create_ledger_account_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAddResponses(unexpected_error_response=out)

        return res

    
    def ledger_accounts_all(self, request: operations.LedgerAccountsAllRequest) -> operations.LedgerAccountsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LedgerAccountsAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetLedgerAccountsResponse])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAllResponses(get_ledger_accounts_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsAllResponses(unexpected_error_response=out)

        return res

    
    def ledger_accounts_delete(self, request: operations.LedgerAccountsDeleteRequest) -> operations.LedgerAccountsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/ledger-accounts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LedgerAccountsDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteLedgerAccountResponse])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsDeleteResponses(delete_ledger_account_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsDeleteResponses(unexpected_error_response=out)

        return res

    
    def ledger_accounts_one(self, request: operations.LedgerAccountsOneRequest) -> operations.LedgerAccountsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/ledger-accounts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LedgerAccountsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetLedgerAccountResponse])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsOneResponses(get_ledger_account_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsOneResponses(unexpected_error_response=out)

        return res

    
    def ledger_accounts_update(self, request: operations.LedgerAccountsUpdateRequest) -> operations.LedgerAccountsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/ledger-accounts/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LedgerAccountsUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateLedgerAccountResponse])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsUpdateResponses(update_ledger_account_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.LedgerAccountsUpdateResponses(unexpected_error_response=out)

        return res

    
    def payments_add(self, request: operations.PaymentsAddRequest) -> operations.PaymentsAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreatePaymentResponse])
                res.responses[r.status_code][content_type] = operations.PaymentsAddResponses(create_payment_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAddResponses(unexpected_error_response=out)

        return res

    
    def payments_all(self, request: operations.PaymentsAllRequest) -> operations.PaymentsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentsResponse])
                res.responses[r.status_code][content_type] = operations.PaymentsAllResponses(get_payments_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsAllResponses(unexpected_error_response=out)

        return res

    
    def payments_delete(self, request: operations.PaymentsDeleteRequest) -> operations.PaymentsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/payments/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletePaymentResponse])
                res.responses[r.status_code][content_type] = operations.PaymentsDeleteResponses(delete_payment_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsDeleteResponses(unexpected_error_response=out)

        return res

    
    def payments_one(self, request: operations.PaymentsOneRequest) -> operations.PaymentsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/payments/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentResponse])
                res.responses[r.status_code][content_type] = operations.PaymentsOneResponses(get_payment_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsOneResponses(unexpected_error_response=out)

        return res

    
    def payments_update(self, request: operations.PaymentsUpdateRequest) -> operations.PaymentsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/payments/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdatePaymentResponse])
                res.responses[r.status_code][content_type] = operations.PaymentsUpdateResponses(update_payment_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.PaymentsUpdateResponses(unexpected_error_response=out)

        return res

    
    def profit_and_loss_one(self, request: operations.ProfitAndLossOneRequest) -> operations.ProfitAndLossOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProfitAndLossOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetProfitAndLossResponse])
                res.responses[r.status_code][content_type] = operations.ProfitAndLossOneResponses(get_profit_and_loss_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ProfitAndLossOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ProfitAndLossOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ProfitAndLossOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ProfitAndLossOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ProfitAndLossOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ProfitAndLossOneResponses(unexpected_error_response=out)

        return res

    
    def suppliers_add(self, request: operations.SuppliersAddRequest) -> operations.SuppliersAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateSupplierResponse])
                res.responses[r.status_code][content_type] = operations.SuppliersAddResponses(create_supplier_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAddResponses(unexpected_error_response=out)

        return res

    
    def suppliers_all(self, request: operations.SuppliersAllRequest) -> operations.SuppliersAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSuppliersResponse])
                res.responses[r.status_code][content_type] = operations.SuppliersAllResponses(get_suppliers_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersAllResponses(unexpected_error_response=out)

        return res

    
    def suppliers_delete(self, request: operations.SuppliersDeleteRequest) -> operations.SuppliersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/suppliers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteSupplierResponse])
                res.responses[r.status_code][content_type] = operations.SuppliersDeleteResponses(delete_supplier_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersDeleteResponses(unexpected_error_response=out)

        return res

    
    def suppliers_one(self, request: operations.SuppliersOneRequest) -> operations.SuppliersOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/suppliers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSupplierResponse])
                res.responses[r.status_code][content_type] = operations.SuppliersOneResponses(get_supplier_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersOneResponses(unexpected_error_response=out)

        return res

    
    def suppliers_update(self, request: operations.SuppliersUpdateRequest) -> operations.SuppliersUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/suppliers/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSupplierResponse])
                res.responses[r.status_code][content_type] = operations.SuppliersUpdateResponses(update_supplier_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.SuppliersUpdateResponses(unexpected_error_response=out)

        return res

    
    def tax_rates_add(self, request: operations.TaxRatesAddRequest) -> operations.TaxRatesAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxRatesAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateTaxRateResponse])
                res.responses[r.status_code][content_type] = operations.TaxRatesAddResponses(create_tax_rate_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAddResponses(unexpected_error_response=out)

        return res

    
    def tax_rates_all(self, request: operations.TaxRatesAllRequest) -> operations.TaxRatesAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxRatesAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTaxRatesResponse])
                res.responses[r.status_code][content_type] = operations.TaxRatesAllResponses(get_tax_rates_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesAllResponses(unexpected_error_response=out)

        return res

    
    def tax_rates_delete(self, request: operations.TaxRatesDeleteRequest) -> operations.TaxRatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/tax-rates/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxRatesDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteTaxRateResponse])
                res.responses[r.status_code][content_type] = operations.TaxRatesDeleteResponses(delete_tax_rate_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesDeleteResponses(unexpected_error_response=out)

        return res

    
    def tax_rates_one(self, request: operations.TaxRatesOneRequest) -> operations.TaxRatesOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/tax-rates/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxRatesOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTaxRateResponse])
                res.responses[r.status_code][content_type] = operations.TaxRatesOneResponses(get_tax_rate_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesOneResponses(unexpected_error_response=out)

        return res

    
    def tax_rates_update(self, request: operations.TaxRatesUpdateRequest) -> operations.TaxRatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/accounting/tax-rates/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxRatesUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateTaxRateResponse])
                res.responses[r.status_code][content_type] = operations.TaxRatesUpdateResponses(update_tax_rate_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.TaxRatesUpdateResponses(unexpected_error_response=out)

        return res

    