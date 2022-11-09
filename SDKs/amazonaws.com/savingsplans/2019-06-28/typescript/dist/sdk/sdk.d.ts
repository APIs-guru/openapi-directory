import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateSavingsPlan(req: operations.CreateSavingsPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateSavingsPlanResponse>;
    DeleteQueuedSavingsPlan(req: operations.DeleteQueuedSavingsPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueuedSavingsPlanResponse>;
    DescribeSavingsPlanRates(req: operations.DescribeSavingsPlanRatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlanRatesResponse>;
    DescribeSavingsPlans(req: operations.DescribeSavingsPlansRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansResponse>;
    DescribeSavingsPlansOfferingRates(req: operations.DescribeSavingsPlansOfferingRatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansOfferingRatesResponse>;
    DescribeSavingsPlansOfferings(req: operations.DescribeSavingsPlansOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansOfferingsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
