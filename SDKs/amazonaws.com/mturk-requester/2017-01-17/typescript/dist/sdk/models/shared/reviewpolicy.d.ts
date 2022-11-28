import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyParameter } from "./policyparameter";
/**
 *  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT.
**/
export declare class ReviewPolicy extends SpeakeasyBase {
    parameters?: PolicyParameter[];
    policyName: string;
}
