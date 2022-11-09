import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Answer } from "./answer";


// GetAnswerOutput
/** 
 * Output of a get answer call.
**/
export class GetAnswerOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Answer" })
  answer?: Answer;

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
