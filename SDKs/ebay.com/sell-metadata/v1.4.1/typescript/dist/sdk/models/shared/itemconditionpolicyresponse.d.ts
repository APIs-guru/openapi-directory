import { SpeakeasyBase } from "../../../internal/utils";
import { ItemConditionPolicy } from "./itemconditionpolicy";
import { Error } from "./error";
export declare class ItemConditionPolicyResponse extends SpeakeasyBase {
    itemConditionPolicies?: ItemConditionPolicy[];
    warnings?: Error[];
}
