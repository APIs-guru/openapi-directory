import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a quota increase request.
**/
export declare class ServiceQuotaIncreaseRequestInTemplate extends SpeakeasyBase {
    awsRegion?: string;
    desiredValue?: number;
    globalQuota?: boolean;
    quotaCode?: string;
    quotaName?: string;
    serviceCode?: string;
    serviceName?: string;
    unit?: string;
}
