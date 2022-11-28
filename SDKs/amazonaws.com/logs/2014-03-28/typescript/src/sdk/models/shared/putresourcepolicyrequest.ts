import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;
}
