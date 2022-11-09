import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;
}
