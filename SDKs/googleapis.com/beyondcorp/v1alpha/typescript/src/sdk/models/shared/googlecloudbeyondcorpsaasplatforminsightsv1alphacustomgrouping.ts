import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping
/** 
 * Customised grouping option that allows setting the group_by fields and also the filters togather for a configured insight request.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldFilter" })
  fieldFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=groupFields" })
  groupFields?: string[];
}
