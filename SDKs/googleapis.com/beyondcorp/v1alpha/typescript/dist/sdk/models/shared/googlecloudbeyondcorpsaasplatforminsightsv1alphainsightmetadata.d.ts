import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadatafield";
export declare enum GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    CustomDateRange = "CUSTOM_DATE_RANGE"
}
/**
 * Insight filters, groupings and aggregations that can be applied for the insight. Examples: aggregations, groups, field filters.
**/
export declare class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata extends SpeakeasyBase {
    aggregations?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum[];
    category?: string;
    displayName?: string;
    fields?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField[];
    groups?: string[];
    subCategory?: string;
    type?: string;
}
