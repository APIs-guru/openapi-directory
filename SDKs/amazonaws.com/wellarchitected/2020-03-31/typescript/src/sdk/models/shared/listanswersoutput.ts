import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnswerSummary } from "./answersummary";


// ListAnswersOutput
/** 
 * Output of a list answers call.
**/
export class ListAnswersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnswerSummaries", elemType: shared.AnswerSummary })
  answerSummaries?: AnswerSummary[];

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
