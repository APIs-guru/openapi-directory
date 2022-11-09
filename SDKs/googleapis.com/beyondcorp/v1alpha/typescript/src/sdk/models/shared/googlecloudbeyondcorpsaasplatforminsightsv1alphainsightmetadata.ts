import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadatafield";

export enum GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
,    CustomDateRange = "CUSTOM_DATE_RANGE"
}


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata
/** 
 * Insight filters, groupings and aggregations that can be applied for the insight. Examples: aggregations, groups, field filters.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregations" })
  aggregations?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum[];

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField })
  fields?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField[];

  @Metadata({ data: "json, name=groups" })
  groups?: string[];

  @Metadata({ data: "json, name=subCategory" })
  subCategory?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
