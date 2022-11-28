import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
import { Error } from "./error";
export declare class ReturnPolicyResponse extends SpeakeasyBase {
    returnPolicies?: ReturnPolicy[];
    warnings?: Error[];
}
