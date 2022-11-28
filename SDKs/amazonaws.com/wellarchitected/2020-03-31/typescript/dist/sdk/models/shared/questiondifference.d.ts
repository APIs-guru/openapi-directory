import { SpeakeasyBase } from "../../../internal/utils";
import { DifferenceStatusEnum } from "./differencestatusenum";
/**
 * A question difference return object.
**/
export declare class QuestionDifference extends SpeakeasyBase {
    differenceStatus?: DifferenceStatusEnum;
    questionId?: string;
    questionTitle?: string;
}
