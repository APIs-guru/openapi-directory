import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://savingsplans.{region}.amazonaws.com", "https://savingsplans.{region}.amazonaws.com", "http://savingsplans.{region}.amazonaws.com.cn", "https://savingsplans.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createSavingsPlan - Creates a Savings Plan.
    **/
    createSavingsPlan(req: operations.CreateSavingsPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateSavingsPlanResponse>;
    /**
     * deleteQueuedSavingsPlan - Deletes the queued purchase for the specified Savings Plan.
    **/
    deleteQueuedSavingsPlan(req: operations.DeleteQueuedSavingsPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueuedSavingsPlanResponse>;
    /**
     * describeSavingsPlanRates - Describes the specified Savings Plans rates.
    **/
    describeSavingsPlanRates(req: operations.DescribeSavingsPlanRatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlanRatesResponse>;
    /**
     * describeSavingsPlans - Describes the specified Savings Plans.
    **/
    describeSavingsPlans(req: operations.DescribeSavingsPlansRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansResponse>;
    /**
     * describeSavingsPlansOfferingRates - Describes the specified Savings Plans offering rates.
    **/
    describeSavingsPlansOfferingRates(req: operations.DescribeSavingsPlansOfferingRatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansOfferingRatesResponse>;
    /**
     * describeSavingsPlansOfferings - Describes the specified Savings Plans offerings.
    **/
    describeSavingsPlansOfferings(req: operations.DescribeSavingsPlansOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansOfferingsResponse>;
    /**
     * listTagsForResource - Lists the tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds the specified tags to the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
