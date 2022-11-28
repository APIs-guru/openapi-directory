import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsight";



// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse
/** 
 * The response for the list of insights.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insights", elemType: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight })
  insights?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
