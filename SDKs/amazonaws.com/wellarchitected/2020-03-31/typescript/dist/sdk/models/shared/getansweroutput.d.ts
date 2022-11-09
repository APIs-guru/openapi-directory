import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Answer } from "./answer";
/**
 * Output of a get answer call.
**/
export declare class GetAnswerOutput extends SpeakeasyBase {
    answer?: Answer;
    lensAlias?: string;
    milestoneNumber?: number;
    workloadId?: string;
}
