import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadatafield";


export enum GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    CustomDateRange = "CUSTOM_DATE_RANGE"
}


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata
/** 
 * Insight filters, groupings and aggregations that can be applied for the insight. Examples: aggregations, groups, field filters.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregations" })
  aggregations?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField })
  fields?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField[];

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subCategory" })
  subCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
