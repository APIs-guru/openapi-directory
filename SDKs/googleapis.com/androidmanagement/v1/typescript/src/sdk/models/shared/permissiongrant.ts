import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PermissionGrantPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}


// PermissionGrant
/** 
 * Configuration for an Android permission and its grant state.
**/
export class PermissionGrant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: PermissionGrantPolicyEnum;
}
