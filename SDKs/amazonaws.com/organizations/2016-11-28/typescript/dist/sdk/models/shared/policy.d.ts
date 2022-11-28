import { SpeakeasyBase } from "../../../internal/utils";
import { PolicySummary } from "./policysummary";
/**
 * Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.
**/
export declare class Policy extends SpeakeasyBase {
    content?: string;
    policySummary?: PolicySummary;
}
