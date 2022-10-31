import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.ebay.com{basePath}",
	"https://apiz.ebay.com{basePath}",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def accept_payment_dispute(self, request: operations.AcceptPaymentDisputeRequest) -> operations.AcceptPaymentDisputeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.ACCEPT_PAYMENT_DISPUTE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/accept", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AcceptPaymentDisputeResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def add_evidence(self, request: operations.AddEvidenceRequest) -> operations.AddEvidenceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.ADD_EVIDENCE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/add_evidence", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddEvidenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddEvidencePaymentDisputeResponse])
                res.add_evidence_payment_dispute_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def contest_payment_dispute(self, request: operations.ContestPaymentDisputeRequest) -> operations.ContestPaymentDisputeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CONTEST_PAYMENT_DISPUTE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/contest", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContestPaymentDisputeResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def create_shipping_fulfillment(self, request: operations.CreateShippingFulfillmentRequest) -> operations.CreateShippingFulfillmentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/order/{orderId}/shipping_fulfillment", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateShippingFulfillmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_shipping_fulfillment_201_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def fetch_evidence_content(self, request: operations.FetchEvidenceContentRequest) -> operations.FetchEvidenceContentResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_EVIDENCE_CONTENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/fetch_evidence_content", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEvidenceContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_activities(self, request: operations.GetActivitiesRequest) -> operations.GetActivitiesResponse:
        warnings.simplefilter("ignore")

        base_url = operations.GET_ACTIVITIES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/activity", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentDisputeActivityHistory])
                res.payment_dispute_activity_history = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_order(self, request: operations.GetOrderRequest) -> operations.GetOrderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/order/{orderId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Order])
                res.order = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_orders(self, request: operations.GetOrdersRequest) -> operations.GetOrdersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/order"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderSearchPagedCollection])
                res.order_search_paged_collection = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_payment_dispute(self, request: operations.GetPaymentDisputeRequest) -> operations.GetPaymentDisputeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.GET_PAYMENT_DISPUTE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentDisputeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentDispute])
                res.payment_dispute = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_payment_dispute_summaries(self, request: operations.GetPaymentDisputeSummariesRequest) -> operations.GetPaymentDisputeSummariesResponse:
        warnings.simplefilter("ignore")

        base_url = operations.GET_PAYMENT_DISPUTE_SUMMARIES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/payment_dispute_summary"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentDisputeSummariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DisputeSummaryResponse])
                res.dispute_summary_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_shipping_fulfillment(self, request: operations.GetShippingFulfillmentRequest) -> operations.GetShippingFulfillmentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/order/{orderId}/shipping_fulfillment/{fulfillmentId}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingFulfillmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingFulfillment])
                res.shipping_fulfillment = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_shipping_fulfillments(self, request: operations.GetShippingFulfillmentsRequest) -> operations.GetShippingFulfillmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/order/{orderId}/shipping_fulfillment", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingFulfillmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingFulfillmentPagedCollection])
                res.shipping_fulfillment_paged_collection = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def issue_refund(self, request: operations.IssueRefundRequest) -> operations.IssueRefundResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/order/{order_id}/issue_refund", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssueRefundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Refund])
                res.refund = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_evidence(self, request: operations.UpdateEvidenceRequest) -> operations.UpdateEvidenceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_EVIDENCE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/update_evidence", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEvidenceResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def upload_evidence_file(self, request: operations.UploadEvidenceFileRequest) -> operations.UploadEvidenceFileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPLOAD_EVIDENCE_FILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/upload_evidence_file", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadEvidenceFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileEvidence])
                res.file_evidence = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    