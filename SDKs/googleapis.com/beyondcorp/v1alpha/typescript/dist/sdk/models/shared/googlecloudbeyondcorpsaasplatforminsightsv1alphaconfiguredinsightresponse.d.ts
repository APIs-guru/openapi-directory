import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharow";
/**
 * The response for the configured insight.
**/
export declare class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse extends SpeakeasyBase {
    appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;
    nextPageToken?: string;
    rows?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow[];
}
