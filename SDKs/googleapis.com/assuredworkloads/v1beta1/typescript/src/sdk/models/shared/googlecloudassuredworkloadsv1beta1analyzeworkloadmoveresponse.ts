import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse
/** 
 * A response that includes the analysis of the hypothetical resource move.
**/
export class GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockers" })
  blockers?: string[];
}
