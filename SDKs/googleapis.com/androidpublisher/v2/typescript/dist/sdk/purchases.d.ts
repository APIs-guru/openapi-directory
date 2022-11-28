import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Purchases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherPurchasesProductsGet - Checks the purchase and consumption status of an inapp item.
    **/
    androidpublisherPurchasesProductsGet(req: operations.AndroidpublisherPurchasesProductsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesProductsGetResponse>;
    /**
     * androidpublisherPurchasesSubscriptionsCancel - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
    **/
    androidpublisherPurchasesSubscriptionsCancel(req: operations.AndroidpublisherPurchasesSubscriptionsCancelRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsCancelResponse>;
    /**
     * androidpublisherPurchasesSubscriptionsDefer - Defers a user's subscription purchase until a specified future expiration time.
    **/
    androidpublisherPurchasesSubscriptionsDefer(req: operations.AndroidpublisherPurchasesSubscriptionsDeferRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsDeferResponse>;
    /**
     * androidpublisherPurchasesSubscriptionsGet - Checks whether a user's subscription purchase is valid and returns its expiry time.
    **/
    androidpublisherPurchasesSubscriptionsGet(req: operations.AndroidpublisherPurchasesSubscriptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsGetResponse>;
    /**
     * androidpublisherPurchasesSubscriptionsRefund - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
    **/
    androidpublisherPurchasesSubscriptionsRefund(req: operations.AndroidpublisherPurchasesSubscriptionsRefundRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsRefundResponse>;
    /**
     * androidpublisherPurchasesSubscriptionsRevoke - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
    **/
    androidpublisherPurchasesSubscriptionsRevoke(req: operations.AndroidpublisherPurchasesSubscriptionsRevokeRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsRevokeResponse>;
    /**
     * androidpublisherPurchasesVoidedpurchasesList - Lists the purchases that were canceled, refunded or charged-back.
    **/
    androidpublisherPurchasesVoidedpurchasesList(req: operations.AndroidpublisherPurchasesVoidedpurchasesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesVoidedpurchasesListResponse>;
}
