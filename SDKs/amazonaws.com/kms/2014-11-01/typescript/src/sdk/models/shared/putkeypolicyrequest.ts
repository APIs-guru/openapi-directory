import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutKeyPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" })
  bypassPolicyLockoutSafetyCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;
}
