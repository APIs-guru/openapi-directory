import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphacustomgrouping";

export enum GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
,    CustomDateRange = "CUSTOM_DATE_RANGE"
}


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig
/** 
 * The configuration that was applied to generate the result.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregation" })
  aggregation?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum;

  @Metadata({ data: "json, name=customGrouping" })
  customGrouping?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=fieldFilter" })
  fieldFilter?: string;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
