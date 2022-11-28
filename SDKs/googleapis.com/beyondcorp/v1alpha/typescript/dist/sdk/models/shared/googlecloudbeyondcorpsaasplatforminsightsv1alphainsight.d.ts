import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadata";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharow";
/**
 * The Insight object with configuration that was returned and actual list of records.
**/
export declare class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight extends SpeakeasyBase {
    appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;
    metadata?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata;
    name?: string;
    rows?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow[];
}
