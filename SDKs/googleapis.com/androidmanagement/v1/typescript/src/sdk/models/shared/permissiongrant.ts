import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PermissionGrantPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED"
,    Prompt = "PROMPT"
,    Grant = "GRANT"
,    Deny = "DENY"
}


// PermissionGrant
/** 
 * Configuration for an Android permission and its grant state.
**/
export class PermissionGrant extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: PermissionGrantPolicyEnum;
}
