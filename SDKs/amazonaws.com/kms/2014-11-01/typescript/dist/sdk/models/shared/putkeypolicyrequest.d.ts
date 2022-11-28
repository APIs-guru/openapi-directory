import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutKeyPolicyRequest extends SpeakeasyBase {
    bypassPolicyLockoutSafetyCheck?: boolean;
    keyId: string;
    policy: string;
    policyName: string;
}
