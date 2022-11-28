import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeyPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;
}
