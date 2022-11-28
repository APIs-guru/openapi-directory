import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphacustomgrouping";


export enum GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    CustomDateRange = "CUSTOM_DATE_RANGE"
}


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig
/** 
 * The configuration that was applied to generate the result.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregation" })
  aggregation?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum;

  @SpeakeasyMetadata({ data: "json, name=customGrouping" })
  customGrouping?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldFilter" })
  fieldFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
