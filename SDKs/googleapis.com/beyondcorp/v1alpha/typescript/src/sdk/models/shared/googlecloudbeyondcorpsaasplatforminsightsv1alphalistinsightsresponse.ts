import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsight";


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse
/** 
 * The response for the list of insights.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=insights", elemType: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight })
  insights?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
