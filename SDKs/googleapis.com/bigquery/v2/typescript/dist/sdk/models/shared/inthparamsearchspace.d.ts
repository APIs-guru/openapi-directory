import { SpeakeasyBase } from "../../../internal/utils";
import { IntCandidates } from "./intcandidates";
import { IntRange } from "./intrange";
/**
 * Search space for an int hyperparameter.
**/
export declare class IntHparamSearchSpace extends SpeakeasyBase {
    candidates?: IntCandidates;
    range?: IntRange;
}
