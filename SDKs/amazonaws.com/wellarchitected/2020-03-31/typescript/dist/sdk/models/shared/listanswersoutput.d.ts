import { SpeakeasyBase } from "../../../internal/utils";
import { AnswerSummary } from "./answersummary";
/**
 * Output of a list answers call.
**/
export declare class ListAnswersOutput extends SpeakeasyBase {
    answerSummaries?: AnswerSummary[];
    lensAlias?: string;
    milestoneNumber?: number;
    nextToken?: string;
    workloadId?: string;
}
