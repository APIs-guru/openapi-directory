import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetKeyPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName: string;
}
