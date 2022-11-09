import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharow";


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse
/** 
 * The response for the configured insight.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedConfig" })
  appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow })
  rows?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow[];
}
