import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsight";
/**
 * The response for the list of insights.
**/
export declare class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse extends SpeakeasyBase {
    insights?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight[];
    nextPageToken?: string;
}
