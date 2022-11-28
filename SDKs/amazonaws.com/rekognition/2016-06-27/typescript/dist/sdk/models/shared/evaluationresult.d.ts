import { SpeakeasyBase } from "../../../internal/utils";
import { Summary } from "./summary";
/**
 * The evaluation results for the training of a model.
**/
export declare class EvaluationResult extends SpeakeasyBase {
    f1Score?: number;
    summary?: Summary;
}
