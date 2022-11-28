import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";



// GetAnswerOutput
/** 
 * Output of a get answer call.
**/
export class GetAnswerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Answer" })
  answer?: Answer;

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
