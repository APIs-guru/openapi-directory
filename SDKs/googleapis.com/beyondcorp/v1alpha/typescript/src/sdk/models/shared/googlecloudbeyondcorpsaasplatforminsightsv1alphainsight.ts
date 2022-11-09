import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphaappliedconfig";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadata";
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow } from "./googlecloudbeyondcorpsaasplatforminsightsv1alpharow";


// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight
/** 
 * The Insight object with configuration that was returned and actual list of records.
**/
export class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedConfig" })
  appliedConfig?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;

  @Metadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow })
  rows?: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow[];
}
