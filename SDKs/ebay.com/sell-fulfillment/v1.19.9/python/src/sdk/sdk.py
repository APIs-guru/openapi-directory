

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.ebay.com{basePath}",
	"https://apiz.ebay.com{basePath}",
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
        
    
    
    
    def accept_payment_dispute(self, request: operations.AcceptPaymentDisputeRequest) -> operations.AcceptPaymentDisputeResponse:
        r"""Accept Payment Dispute
        This method is used if the seller wishes to accept a payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. The revision field in the request payload is required, and the returnAddress field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.
        """
        
        base_url = operations.ACCEPT_PAYMENT_DISPUTE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/accept", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Add an Evidence File
        This method is used by the seller to add one or more evidence files to address a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: All evidence files should be uploaded using addEvidence and updateEvidence before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using contestPaymentDispute or through My eBay), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. The file(s) to add are identified through the files array in the request payload. Adding one or more new evidence files for a payment dispute triggers the creation of an evidence file, and the unique identifier for the new evidence file is automatically generated and returned in the evidenceId field of the addEvidence response payload upon a successful call. The type of evidence being added should be specified in the evidenceType field. All files being added (if more than one) should correspond to this evidence type. Upon a successful call, an evidenceId value is returned in the response. This indicates that a new evidence set has been created for the payment dispute, and this evidence set includes the evidence file(s) that were passed in to the fileId array. The evidenceId value will be needed if the seller wishes to add to the evidence set by using the updateEvidence method, or if they want to retrieve a specific evidence file within the evidence set by using the fetchEvidenceContent method.
        """
        
        base_url = operations.ADD_EVIDENCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/add_evidence", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Contest Payment Dispute
        This method is used if the seller wishes to contest a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: Before contesting a payment dispute, the seller must upload all evidence files using the addEvidence and updateEvidence methods. Once the seller has officially contested the dispute (using contestPaymentDispute), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. If a seller decides to contest a payment dispute, that seller should be prepared to provide evidential documents such as proof of delivery, proof of authentication, or other documents. The type of evidential documents that the seller will provide will depend on why the buyer initiated the payment dispute. The revision field in the request payload is required, and the returnAddress field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.
        """
        
        base_url = operations.CONTEST_PAYMENT_DISPUTE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/contest", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a shipping fulfillment. For each package, execute this call once to generate a shipping fulfillment associated with that package. Note: A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package. Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/order/{orderId}/shipping_fulfillment", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Get Payment Dispute Evidence File
        This call retrieves a specific evidence file for a payment dispute. The following three identifying parameters are needed in the call URI: payment_dispute_id: the identifier of the payment dispute. The identifier of each payment dispute is returned in the getPaymentDisputeSummaries response. evidence_id: the identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the evidence array in the getPaymentDispute response. file_id: the identifier of an evidential file. This file must belong to the evidential file set identified through the evidence_id query parameter. The identifier of each evidential file is returned under the evidence.files array in the getPaymentDispute response. An actual binary file is returned if the call is successful. An error will occur if any of three identifiers are invalid.
        """
        
        base_url = operations.FETCH_EVIDENCE_CONTENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/fetch_evidence_content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Get Payment Dispute Activity
        This method retrieve a log of activity for a payment dispute. The identifier of the payment dispute is passed in as a path parameter. The output includes a timestamp for each action of the payment dispute, from creation to resolution, and all steps in between.
        """
        
        base_url = operations.GET_ACTIVITIES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/activity", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Use this call to retrieve the contents of an order based on its unique identifier, orderId. This value was returned in the getOrders call's orders.orderId field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional fieldGroups query parameter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order object contains information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/order/{orderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the filter parameter. You can alternatively specify a list of orders using the orderIds parameter. Include the optional fieldGroups query parameter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order objects contain information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each Important: In this call, the cancelStatus.cancelRequests array is returned but is always empty. Use the getOrder call instead, which returns this array fully populated with information about any cancellation requests.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/order"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Get Payment Dispute Details
        This method retrieves detailed information on a specific payment dispute. The payment dispute identifier is passed in as path parameter at the end of the call URI. Below is a summary of the information that is retrieved: Current status of payment dispute Amount of the payment dispute Reason the payment dispute was opened Order and line items associated with the payment dispute Seller response options if an action is currently required on the payment dispute Details on the results of the payment dispute if it has been closed Details on any evidence that was provided by the seller to fight the payment dispute
        """
        
        base_url = operations.GET_PAYMENT_DISPUTE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Search Payment Dispute by Filters
        This method is used retrieve one or more payment disputes filed against the seller. These payment disputes can be open or recently closed. The following filter types are available in the request payload to control the payment disputes that are returned: Dispute filed against a specific order (order_id parameter is used) Dispute(s) filed by a specific buyer (buyer_username parameter is used) Dispute(s) filed within a specific date range (open_date_from and/or open_date_to parameters are used) Disputes in a specific state (payment_dispute_status parameter is used)More than one of these filter types can be used together. See the request payload request fields for more information about how each filter is used. If none of the filters are used, all open and recently closed payment disputes are returned. Pagination is also available. See the limit and offset fields for more information on how pagination is used for this method.
        """
        
        base_url = operations.GET_PAYMENT_DISPUTE_SUMMARIES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/payment_dispute_summary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Use this call to retrieve the contents of a fulfillment based on its unique identifier, fulfillmentId (combined with the associated order's orderId). The fulfillmentId value was originally generated by the createShippingFulfillment call, and is returned by the getShippingFulfillments call in the members.fulfillmentId field.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/order/{orderId}/shipping_fulfillment/{fulfillmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, orderId. This value is returned in the getOrders call's members.orderId field when you search for orders by creation date or shipment status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/order/{orderId}/shipping_fulfillment", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Issue Refund
        This method allows a seller (opted in to eBay Managed Payments) to issue a full or partial refund to a buyer for an order. Full or partial refunds can be issued at the order level or line item level. The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent getOrder call to check the status of the refund. The status of an order refund can be found in the paymentSummary.refunds.refundStatus field of the getOrder response. Note: eBay Managed Payments is currently only available to a limited number of US sellers, but this program is scheduled to become available to more sellers throughout 2019 and beyond.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/order/{order_id}/issue_refund", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Update evidence
        This method is used by the seller to update an existing evidence set for a payment dispute with one or more evidence files. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: All evidence files should be uploaded using addEvidence and updateEvidence before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using contestPaymentDispute or through My eBay), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. The unique identifier of the evidence set to update is specified through the evidenceId field, and the file(s) to add are identified through the files array in the request payload. The unique identifier for an evidence file is automatically generated and returned in the fileId field of the uploadEvidence response payload upon a successful call. Sellers must make sure to capture the fileId value for each evidence file that is uploaded with the uploadEvidence method. The type of evidence being added should be specified in the evidenceType field. All files being added (if more than one) should correspond to this evidence type. Upon a successful call, an http status code of 204 Success is returned. There is no response payload unless an error occurs. To verify that a new file is a part of the evidence set, the seller can use the fetchEvidenceContent method, passing in the proper evidenceId and fileId values.
        """
        
        base_url = operations.UPDATE_EVIDENCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/update_evidence", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Upload an Evidence File
        This method is used to upload an evidence file for a contested payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. The uploadEvidenceFile only uploads an encrypted, binary image file (using multipart/form-data HTTP request header), and does not have a request payload. The three image formats supported at this time are .JPEG, .JPG, and .PNG. Once the file is successfully uploaded, the seller will need to grab the fileId value in the response payload to add this file to a new evidence set using the addEvidence method, or to add this file to an existing evidence set using the updateEvidence method.
        """
        
        base_url = operations.UPLOAD_EVIDENCE_FILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/payment_dispute/{payment_dispute_id}/upload_evidence_file", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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

    