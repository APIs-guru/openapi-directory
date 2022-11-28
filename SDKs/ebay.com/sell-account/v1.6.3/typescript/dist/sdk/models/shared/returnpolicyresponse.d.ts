import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
/**
 * The response payload for return policy requests.
**/
export declare class ReturnPolicyResponse extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    returnPolicies?: ReturnPolicy[];
    total?: number;
}
