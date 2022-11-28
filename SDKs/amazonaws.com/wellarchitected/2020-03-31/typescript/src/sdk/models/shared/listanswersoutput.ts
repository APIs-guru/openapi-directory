import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnswerSummary } from "./answersummary";



// ListAnswersOutput
/** 
 * Output of a list answers call.
**/
export class ListAnswersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnswerSummaries", elemType: AnswerSummary })
  answerSummaries?: AnswerSummary[];

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
