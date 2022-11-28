import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleCandidates } from "./doublecandidates";
import { DoubleRange } from "./doublerange";
/**
 * Search space for a double hyperparameter.
**/
export declare class DoubleHparamSearchSpace extends SpeakeasyBase {
    candidates?: DoubleCandidates;
    range?: DoubleRange;
}
