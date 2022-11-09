import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutKeyPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" })
  bypassPolicyLockoutSafetyCheck?: boolean;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=Policy" })
  policy: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName: string;
}
