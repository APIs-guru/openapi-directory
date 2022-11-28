import { SpeakeasyBase } from "../../../internal/utils";
import { SummarizedCounter } from "./summarizedcounter";
/**
 * A summary of information about the attack.
**/
export declare class SummarizedAttackVector extends SpeakeasyBase {
    vectorCounters?: SummarizedCounter[];
    vectorType: string;
}
