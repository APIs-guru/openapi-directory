import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphacustomgrouping";
export declare enum GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    CustomDateRange = "CUSTOM_DATE_RANGE"
}
/**
 * The configuration that was applied to generate the result.
**/
export declare class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig extends SpeakeasyBase {
    aggregation?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum;
    customGrouping?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping;
    endTime?: string;
    fieldFilter?: string;
    group?: string;
    startTime?: string;
}
