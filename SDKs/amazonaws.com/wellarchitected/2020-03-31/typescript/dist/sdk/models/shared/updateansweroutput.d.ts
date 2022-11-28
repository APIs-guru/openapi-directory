import { SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";
/**
 * Output of a update answer call.
**/
export declare class UpdateAnswerOutput extends SpeakeasyBase {
    answer?: Answer;
    lensAlias?: string;
    workloadId?: string;
}
