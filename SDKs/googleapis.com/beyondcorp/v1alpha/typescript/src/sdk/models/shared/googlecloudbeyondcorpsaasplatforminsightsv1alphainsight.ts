import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadata";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharow";



// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight
/** 
 * The Insight object with configuration that was returned and actual list of records.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedConfig" })
  appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow })
  rows?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow[];
}
