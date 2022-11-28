import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration data for an Ad Exchange performance report list.
**/
export declare class PerformanceReport extends SpeakeasyBase {
    bidRate?: number;
    bidRequestRate?: number;
    calloutStatusRate?: any[];
    cookieMatcherStatusRate?: any[];
    creativeStatusRate?: any[];
    filteredBidRate?: number;
    hostedMatchStatusRate?: any[];
    inventoryMatchRate?: number;
    kind?: string;
    latency50thPercentile?: number;
    latency85thPercentile?: number;
    latency95thPercentile?: number;
    noQuotaInRegion?: number;
    outOfQuota?: number;
    pixelMatchRequests?: number;
    pixelMatchResponses?: number;
    quotaConfiguredLimit?: number;
    quotaThrottledLimit?: number;
    region?: string;
    successfulRequestRate?: number;
    timestamp?: string;
    unsuccessfulRequestRate?: number;
}
