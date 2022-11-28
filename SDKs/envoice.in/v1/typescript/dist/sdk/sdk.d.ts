import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.envoice.in"];
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
     * clientApiAll - Return all clients for the account
    **/
    clientApiAll(req: operations.ClientApiAllRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiAllResponse>;
    /**
     * clientApiCanDelete - Check if the provided client can be deleted
    **/
    clientApiCanDelete(req: operations.ClientApiCanDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiCanDeleteResponse>;
    /**
     * clientApiDelete - Delete an existing client
    **/
    clientApiDelete(req: operations.ClientApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiDeleteResponse>;
    /**
     * clientApiDetails - Return client details. Activities and invoices included.
    **/
    clientApiDetails(req: operations.ClientApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ClientApiDetailsResponse>;
    /**
     * estimationApiAll - Return all estimation for the account
    **/
    estimationApiAll(req: operations.EstimationApiAllRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiAllResponse>;
    /**
     * estimationApiChangeStatus - Change estimation status
    **/
    estimationApiChangeStatus(req: operations.EstimationApiChangeStatusRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiChangeStatusResponse>;
    /**
     * estimationApiDelete - Delete an existing estimation
    **/
    estimationApiDelete(req: operations.EstimationApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiDeleteResponse>;
    /**
     * estimationApiDetails - Return estimation data
    **/
    estimationApiDetails(req: operations.EstimationApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiDetailsResponse>;
    /**
     * estimationApiSendToClient - Send the provided estimation to the client
    **/
    estimationApiSendToClient(req: operations.EstimationApiSendToClientRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiSendToClientResponse>;
    /**
     * estimationApiStatus - Retrieve the status of the estimation
    **/
    estimationApiStatus(req: operations.EstimationApiStatusRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiStatusResponse>;
    /**
     * estimationApiUri - Return the unique url to the client's invoice
    **/
    estimationApiUri(req: operations.EstimationApiUriRequest, config?: AxiosRequestConfig): Promise<operations.EstimationApiUriResponse>;
    /**
     * getApiInvoiceAllcategories - Return all invoice categories for the account
    **/
    getApiInvoiceAllcategories(req: operations.GetApiInvoiceAllcategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiInvoiceAllcategoriesResponse>;
    /**
     * generalApiCountries - Return all of the platform supported countries
    **/
    generalApiCountries(req: operations.GeneralApiCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiCountriesResponse>;
    /**
     * generalApiCurrencies - Return all of the platform supported currencies
    **/
    generalApiCurrencies(req: operations.GeneralApiCurrenciesRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiCurrenciesResponse>;
    /**
     * generalApiDateFormats - Return all of the platform supported Date Formats
    **/
    generalApiDateFormats(req: operations.GeneralApiDateFormatsRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiDateFormatsResponse>;
    /**
     * generalApiUiLanguages - Return all of the platform supported UI languages
    **/
    generalApiUiLanguages(req: operations.GeneralApiUiLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiUiLanguagesResponse>;
    /**
     * invoiceApiAll - Return all invoices for the account
    **/
    invoiceApiAll(req: operations.InvoiceApiAllRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiAllResponse>;
    /**
     * invoiceApiChangeStatus - Change invoice status
    **/
    invoiceApiChangeStatus(req: operations.InvoiceApiChangeStatusRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiChangeStatusResponse>;
    /**
     * invoiceApiDelete - Delete an existing invoice
    **/
    invoiceApiDelete(req: operations.InvoiceApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiDeleteResponse>;
    /**
     * invoiceApiDetails - Return invoice data
    **/
    invoiceApiDetails(req: operations.InvoiceApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiDetailsResponse>;
    /**
     * invoiceApiSendToAccountant - Send the provided invoice to the accountant
    **/
    invoiceApiSendToAccountant(req: operations.InvoiceApiSendToAccountantRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToAccountantResponse>;
    /**
     * invoiceApiSendToClient - Send the provided invoice to the client
    **/
    invoiceApiSendToClient(req: operations.InvoiceApiSendToClientRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiSendToClientResponse>;
    /**
     * invoiceApiStatus - Retrieve the status of the invoice
    **/
    invoiceApiStatus(req: operations.InvoiceApiStatusRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiStatusResponse>;
    /**
     * invoiceApiUri - Return the unique url to the client's invoice
    **/
    invoiceApiUri(req: operations.InvoiceApiUriRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceApiUriResponse>;
    /**
     * orderApiAll - Return all orders for the account
    **/
    orderApiAll(req: operations.OrderApiAllRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiAllResponse>;
    /**
     * orderApiChangeShippingDetails - Change order shipping details
    **/
    orderApiChangeShippingDetails(req: operations.OrderApiChangeShippingDetailsRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeShippingDetailsResponse>;
    /**
     * orderApiChangeStatus - Change order status
    **/
    orderApiChangeStatus(req: operations.OrderApiChangeStatusRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiChangeStatusResponse>;
    /**
     * orderApiDelete - Delete an existing order
    **/
    orderApiDelete(req: operations.OrderApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiDeleteResponse>;
    /**
     * orderApiDetails - Return order details
    **/
    orderApiDetails(req: operations.OrderApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiDetailsResponse>;
    /**
     * postApiInvoiceDeletecategory - Delete an existing invoice category
    **/
    postApiInvoiceDeletecategory(req: operations.PostApiInvoiceDeletecategoryRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceDeletecategoryResponse>;
    /**
     * postApiInvoiceNewcategory - Create an invoice category
    **/
    postApiInvoiceNewcategory(req: operations.PostApiInvoiceNewcategoryRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceNewcategoryResponse>;
    /**
     * postApiInvoiceUpdatecategory - Update an existing invoice category
    **/
    postApiInvoiceUpdatecategory(req: operations.PostApiInvoiceUpdatecategoryRequest, config?: AxiosRequestConfig): Promise<operations.PostApiInvoiceUpdatecategoryResponse>;
    /**
     * paymentApiSupported - Return all supported payment gateways (no currencies means all are supported)
    **/
    paymentApiSupported(req: operations.PaymentApiSupportedRequest, config?: AxiosRequestConfig): Promise<operations.PaymentApiSupportedResponse>;
    /**
     * paymentLinkApiAll - Create a payment link
    **/
    paymentLinkApiAll(req: operations.PaymentLinkApiAllRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiAllResponse>;
    /**
     * paymentLinkApiUri - Return the unique url to the client's payment link
    **/
    paymentLinkApiUri(req: operations.PaymentLinkApiUriRequest, config?: AxiosRequestConfig): Promise<operations.PaymentLinkApiUriResponse>;
    /**
     * productApiAll - Return all products for the account
    **/
    productApiAll(req: operations.ProductApiAllRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiAllResponse>;
    /**
     * productApiDelete - Delete an existing product
    **/
    productApiDelete(req: operations.ProductApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiDeleteResponse>;
    /**
     * productApiDetails - Return product details
    **/
    productApiDetails(req: operations.ProductApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ProductApiDetailsResponse>;
    /**
     * taxApiAll - Return all taxes for the account
    **/
    taxApiAll(req: operations.TaxApiAllRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiAllResponse>;
    /**
     * taxApiDelete - Delete an existing tax
    **/
    taxApiDelete(req: operations.TaxApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiDeleteResponse>;
    /**
     * taxApiNew - Create a tax
    **/
    taxApiNew(req: operations.TaxApiNewRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiNewResponse>;
    /**
     * taxApiUpdate - Update an existing tax
    **/
    taxApiUpdate(req: operations.TaxApiUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaxApiUpdateResponse>;
    /**
     * workTypeApiAll - Return all work types for the account
    **/
    workTypeApiAll(req: operations.WorkTypeApiAllRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiAllResponse>;
    /**
     * workTypeApiDelete - Delete an existing work type
    **/
    workTypeApiDelete(req: operations.WorkTypeApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiDeleteResponse>;
    /**
     * workTypeApiDetails - Return work type details
    **/
    workTypeApiDetails(req: operations.WorkTypeApiDetailsRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiDetailsResponse>;
    /**
     * workTypeApiNew - Create a work type
    **/
    workTypeApiNew(req: operations.WorkTypeApiNewRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiNewResponse>;
    /**
     * workTypeApiSearch - Return all work types for the account that match the query param
    **/
    workTypeApiSearch(req: operations.WorkTypeApiSearchRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiSearchResponse>;
    /**
     * workTypeApiUpdate - Update an existing work type
    **/
    workTypeApiUpdate(req: operations.WorkTypeApiUpdateRequest, config?: AxiosRequestConfig): Promise<operations.WorkTypeApiUpdateResponse>;
}
export {};
