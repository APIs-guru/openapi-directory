import { SpeakeasyBase } from "../../../internal/utils";
import { Explanation } from "./explanation";
/**
 * Global explanations containing the top most important features after training.
**/
export declare class GlobalExplanation extends SpeakeasyBase {
    classLabel?: string;
    explanations?: Explanation[];
}
