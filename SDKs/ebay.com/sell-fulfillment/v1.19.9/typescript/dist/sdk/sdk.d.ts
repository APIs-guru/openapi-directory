import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.ebay.com{basePath}", "https://apiz.ebay.com{basePath}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * acceptPaymentDispute - Accept Payment Dispute
     *
     * This method is used if the seller wishes to accept a payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. The revision field in the request payload is required, and the returnAddress field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.
    **/
    acceptPaymentDispute(req: operations.AcceptPaymentDisputeRequest, config?: AxiosRequestConfig): Promise<operations.AcceptPaymentDisputeResponse>;
    /**
     * addEvidence - Add an Evidence File
     *
     * This method is used by the seller to add one or more evidence files to address a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: All evidence files should be uploaded using addEvidence and updateEvidence before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using contestPaymentDispute or through My eBay), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. The file(s) to add are identified through the files array in the request payload. Adding one or more new evidence files for a payment dispute triggers the creation of an evidence file, and the unique identifier for the new evidence file is automatically generated and returned in the evidenceId field of the addEvidence response payload upon a successful call. The type of evidence being added should be specified in the evidenceType field. All files being added (if more than one) should correspond to this evidence type. Upon a successful call, an evidenceId value is returned in the response. This indicates that a new evidence set has been created for the payment dispute, and this evidence set includes the evidence file(s) that were passed in to the fileId array. The evidenceId value will be needed if the seller wishes to add to the evidence set by using the updateEvidence method, or if they want to retrieve a specific evidence file within the evidence set by using the fetchEvidenceContent method.
    **/
    addEvidence(req: operations.AddEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.AddEvidenceResponse>;
    /**
     * contestPaymentDispute - Contest Payment Dispute
     *
     * This method is used if the seller wishes to contest a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: Before contesting a payment dispute, the seller must upload all evidence files using the addEvidence and updateEvidence methods. Once the seller has officially contested the dispute (using contestPaymentDispute), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. If a seller decides to contest a payment dispute, that seller should be prepared to provide evidential documents such as proof of delivery, proof of authentication, or other documents. The type of evidential documents that the seller will provide will depend on why the buyer initiated the payment dispute. The revision field in the request payload is required, and the returnAddress field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.
    **/
    contestPaymentDispute(req: operations.ContestPaymentDisputeRequest, config?: AxiosRequestConfig): Promise<operations.ContestPaymentDisputeResponse>;
    /**
     * createShippingFulfillment - When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a shipping fulfillment. For each package, execute this call once to generate a shipping fulfillment associated with that package. Note: A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package. Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.
    **/
    createShippingFulfillment(req: operations.CreateShippingFulfillmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateShippingFulfillmentResponse>;
    /**
     * fetchEvidenceContent - Get Payment Dispute Evidence File
     *
     * This call retrieves a specific evidence file for a payment dispute. The following three identifying parameters are needed in the call URI: payment_dispute_id: the identifier of the payment dispute. The identifier of each payment dispute is returned in the getPaymentDisputeSummaries response. evidence_id: the identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the evidence array in the getPaymentDispute response. file_id: the identifier of an evidential file. This file must belong to the evidential file set identified through the evidence_id query parameter. The identifier of each evidential file is returned under the evidence.files array in the getPaymentDispute response. An actual binary file is returned if the call is successful. An error will occur if any of three identifiers are invalid.
    **/
    fetchEvidenceContent(req: operations.FetchEvidenceContentRequest, config?: AxiosRequestConfig): Promise<operations.FetchEvidenceContentResponse>;
    /**
     * getActivities - Get Payment Dispute Activity
     *
     * This method retrieve a log of activity for a payment dispute. The identifier of the payment dispute is passed in as a path parameter. The output includes a timestamp for each action of the payment dispute, from creation to resolution, and all steps in between.
    **/
    getActivities(req: operations.GetActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetActivitiesResponse>;
    /**
     * getOrder - Use this call to retrieve the contents of an order based on its unique identifier, orderId. This value was returned in the getOrders call's orders.orderId field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional fieldGroups query parameter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order object contains information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each
    **/
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * getOrders - Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the filter parameter. You can alternatively specify a list of orders using the orderIds parameter. Include the optional fieldGroups query parameter set to TAX_BREAKDOWN to return a breakdown of the taxes and fees. The returned Order objects contain information you can use to create and process fulfillments, including: Information about the buyer and seller Information about the order's line items The plans for packaging, addressing and shipping the order The status of payment, packaging, addressing, and shipping the order A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs A summary of applied taxes and fees, and optionally a breakdown of each Important: In this call, the cancelStatus.cancelRequests array is returned but is always empty. Use the getOrder call instead, which returns this array fully populated with information about any cancellation requests.
    **/
    getOrders(req: operations.GetOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersResponse>;
    /**
     * getPaymentDispute - Get Payment Dispute Details
     *
     * This method retrieves detailed information on a specific payment dispute. The payment dispute identifier is passed in as path parameter at the end of the call URI. Below is a summary of the information that is retrieved: Current status of payment dispute Amount of the payment dispute Reason the payment dispute was opened Order and line items associated with the payment dispute Seller response options if an action is currently required on the payment dispute Details on the results of the payment dispute if it has been closed Details on any evidence that was provided by the seller to fight the payment dispute
    **/
    getPaymentDispute(req: operations.GetPaymentDisputeRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentDisputeResponse>;
    /**
     * getPaymentDisputeSummaries - Search Payment Dispute by Filters
     *
     * This method is used retrieve one or more payment disputes filed against the seller. These payment disputes can be open or recently closed. The following filter types are available in the request payload to control the payment disputes that are returned: Dispute filed against a specific order (order_id parameter is used) Dispute(s) filed by a specific buyer (buyer_username parameter is used) Dispute(s) filed within a specific date range (open_date_from and/or open_date_to parameters are used) Disputes in a specific state (payment_dispute_status parameter is used)More than one of these filter types can be used together. See the request payload request fields for more information about how each filter is used. If none of the filters are used, all open and recently closed payment disputes are returned. Pagination is also available. See the limit and offset fields for more information on how pagination is used for this method.
    **/
    getPaymentDisputeSummaries(req: operations.GetPaymentDisputeSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentDisputeSummariesResponse>;
    /**
     * getShippingFulfillment - Use this call to retrieve the contents of a fulfillment based on its unique identifier, fulfillmentId (combined with the associated order's orderId). The fulfillmentId value was originally generated by the createShippingFulfillment call, and is returned by the getShippingFulfillments call in the members.fulfillmentId field.
    **/
    getShippingFulfillment(req: operations.GetShippingFulfillmentRequest, config?: AxiosRequestConfig): Promise<operations.GetShippingFulfillmentResponse>;
    /**
     * getShippingFulfillments - Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, orderId. This value is returned in the getOrders call's members.orderId field when you search for orders by creation date or shipment status.
    **/
    getShippingFulfillments(req: operations.GetShippingFulfillmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetShippingFulfillmentsResponse>;
    /**
     * issueRefund - Issue Refund
     *
     * This method allows a seller (opted in to eBay Managed Payments) to issue a full or partial refund to a buyer for an order. Full or partial refunds can be issued at the order level or line item level. The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent getOrder call to check the status of the refund. The status of an order refund can be found in the paymentSummary.refunds.refundStatus field of the getOrder response. Note: eBay Managed Payments is currently only available to a limited number of US sellers, but this program is scheduled to become available to more sellers throughout 2019 and beyond.
    **/
    issueRefund(req: operations.IssueRefundRequest, config?: AxiosRequestConfig): Promise<operations.IssueRefundResponse>;
    /**
     * updateEvidence - Update evidence
     *
     * This method is used by the seller to update an existing evidence set for a payment dispute with one or more evidence files. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. Note: All evidence files should be uploaded using addEvidence and updateEvidence before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using contestPaymentDispute or through My eBay), the addEvidence and updateEvidence methods can no longer be used. In the evidenceRequests array of the getPaymentDispute response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute. The unique identifier of the evidence set to update is specified through the evidenceId field, and the file(s) to add are identified through the files array in the request payload. The unique identifier for an evidence file is automatically generated and returned in the fileId field of the uploadEvidence response payload upon a successful call. Sellers must make sure to capture the fileId value for each evidence file that is uploaded with the uploadEvidence method. The type of evidence being added should be specified in the evidenceType field. All files being added (if more than one) should correspond to this evidence type. Upon a successful call, an http status code of 204 Success is returned. There is no response payload unless an error occurs. To verify that a new file is a part of the evidence set, the seller can use the fetchEvidenceContent method, passing in the proper evidenceId and fileId values.
    **/
    updateEvidence(req: operations.UpdateEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEvidenceResponse>;
    /**
     * uploadEvidenceFile - Upload an Evidence File
     *
     * This method is used to upload an evidence file for a contested payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the getPaymentDisputeSummaries method. The uploadEvidenceFile only uploads an encrypted, binary image file (using multipart/form-data HTTP request header), and does not have a request payload. The three image formats supported at this time are .JPEG, .JPG, and .PNG. Once the file is successfully uploaded, the seller will need to grab the fileId value in the response payload to add this file to a new evidence set using the addEvidence method, or to add this file to an existing evidence set using the updateEvidence method.
    **/
    uploadEvidenceFile(req: operations.UploadEvidenceFileRequest, config?: AxiosRequestConfig): Promise<operations.UploadEvidenceFileResponse>;
}
export {};
