import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharow";



// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse
/** 
 * The response for the configured insight.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedConfig" })
  appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow })
  rows?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow[];
}
