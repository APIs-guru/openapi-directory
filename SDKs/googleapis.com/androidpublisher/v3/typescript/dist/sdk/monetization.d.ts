import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Monetization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherMonetizationConvertRegionPrices - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
    **/
    androidpublisherMonetizationConvertRegionPrices(req: operations.AndroidpublisherMonetizationConvertRegionPricesRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationConvertRegionPricesResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsArchive - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
    **/
    androidpublisherMonetizationSubscriptionsArchive(req: operations.AndroidpublisherMonetizationSubscriptionsArchiveRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansActivate - Activates a base plan. Once activated, base plans will be available to new subscribers.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansActivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansDeactivate - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
    **/
    androidpublisherMonetizationSubscriptionsBasePlansDeactivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansDelete - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansDelete(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansMigratePrices - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansMigratePrices(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersActivate - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansOffersActivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersCreate - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansOffersCreate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersDelete - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansOffersDelete(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersGet - Reads a single offer
    **/
    androidpublisherMonetizationSubscriptionsBasePlansOffersGet(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersList - Lists all offers under a given subscription.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansOffersList(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersPatch - Updates an existing subscription offer.
    **/
    androidpublisherMonetizationSubscriptionsBasePlansOffersPatch(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsCreate - Creates a new subscription. Newly added base plans will remain in draft state until activated.
    **/
    androidpublisherMonetizationSubscriptionsCreate(req: operations.AndroidpublisherMonetizationSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsCreateResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsDelete - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
    **/
    androidpublisherMonetizationSubscriptionsDelete(req: operations.AndroidpublisherMonetizationSubscriptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsGet - Reads a single subscription.
    **/
    androidpublisherMonetizationSubscriptionsGet(req: operations.AndroidpublisherMonetizationSubscriptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsGetResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsList - Lists all subscriptions under a given app.
    **/
    androidpublisherMonetizationSubscriptionsList(req: operations.AndroidpublisherMonetizationSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsListResponse>;
    /**
     * androidpublisherMonetizationSubscriptionsPatch - Updates an existing subscription.
    **/
    androidpublisherMonetizationSubscriptionsPatch(req: operations.AndroidpublisherMonetizationSubscriptionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsPatchResponse>;
}
