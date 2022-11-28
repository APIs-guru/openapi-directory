import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidateResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourcePolicy" })
  resourcePolicy: string;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId?: string;
}
