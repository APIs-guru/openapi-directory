import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PermissionGrantPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}
/**
 * Configuration for an Android permission and its grant state.
**/
export declare class PermissionGrant extends SpeakeasyBase {
    permission?: string;
    policy?: PermissionGrantPolicyEnum;
}
