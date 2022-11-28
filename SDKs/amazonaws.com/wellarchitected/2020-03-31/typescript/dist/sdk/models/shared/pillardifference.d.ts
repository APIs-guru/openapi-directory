import { SpeakeasyBase } from "../../../internal/utils";
import { DifferenceStatusEnum } from "./differencestatusenum";
import { QuestionDifference } from "./questiondifference";
/**
 * A pillar difference return object.
**/
export declare class PillarDifference extends SpeakeasyBase {
    differenceStatus?: DifferenceStatusEnum;
    pillarId?: string;
    questionDifferences?: QuestionDifference[];
}
