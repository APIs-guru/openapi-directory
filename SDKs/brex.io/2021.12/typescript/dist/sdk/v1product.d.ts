import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * productAvailability - Retrieves a document availability result
     *
     * Check availability and valid options for a particular product for a particular company identfied by its id
    **/
    productAvailability(req: operations.ProductAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.ProductAvailabilityResponse>;
    /**
     * productCatalog - Returns a catalog of products
     *
     * Returns a catalog of purchasable products available with some metadata for a particular country
    **/
    productCatalog(req: operations.ProductCatalogRequest, config?: AxiosRequestConfig): Promise<operations.ProductCatalogResponse>;
    /**
     * productNotifier - Returns metadata for a notifier
     *
     * Queries and returns all metadata associated with a notifier identified by its notifer id
    **/
    productNotifier(req: operations.ProductNotifierRequest, config?: AxiosRequestConfig): Promise<operations.ProductNotifierResponse>;
    /**
     * productNotifierCreate - Creates a notifier for an order
     *
     * Create a notifier for a particular order. Parameters can be supplied in the path
    **/
    productNotifierCreate(req: operations.ProductNotifierCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProductNotifierCreateResponse>;
    /**
     * productOrder - Places a product order
     *
     * Place an order for a particular product identified by its SKU for a particular company identified by its id
    **/
    productOrder(req: operations.ProductOrderRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderResponse>;
    /**
     * productOrderConcierge - Places a concierge order
     *
     * Place an order for a concierge product
    **/
    productOrderConcierge(req: operations.ProductOrderConciergeRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderConciergeResponse>;
    /**
     * productOrderUbo - Places a UBO order
     *
     * Place an order for a UBO (ultimate beneficial owner) discovery report
    **/
    productOrderUbo(req: operations.ProductOrderUboRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderUboResponse>;
    /**
     * productOrderWithOption - Places a product order
     *
     * Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id
    **/
    productOrderWithOption(req: operations.ProductOrderWithOptionRequest, config?: AxiosRequestConfig): Promise<operations.ProductOrderWithOptionResponse>;
    /**
     * productRetrieve - Retrieves the result of an order
     *
     * Retrieves the document or structured data associated with a completed order identified with its order id
    **/
    productRetrieve(req: operations.ProductRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.ProductRetrieveResponse>;
    /**
     * productSearch - Returns a list of products
     *
     * Search for possible products for a particular company identified by its id
    **/
    productSearch(req: operations.ProductSearchRequest, config?: AxiosRequestConfig): Promise<operations.ProductSearchResponse>;
    /**
     * productStatus - Returns metadata for a order
     *
     * Retrieve the current status of an order identified by its order id
    **/
    productStatus(req: operations.ProductStatusRequest, config?: AxiosRequestConfig): Promise<operations.ProductStatusResponse>;
    /**
     * productUpdateAction - Updates metadata of an order
     *
     * Update an existing order identified by its order id
    **/
    productUpdateAction(req: operations.ProductUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.ProductUpdateActionResponse>;
}
