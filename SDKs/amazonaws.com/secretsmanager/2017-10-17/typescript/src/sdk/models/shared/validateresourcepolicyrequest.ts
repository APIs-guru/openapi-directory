import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidateResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourcePolicy" })
  resourcePolicy: string;

  @Metadata({ data: "json, name=SecretId" })
  secretId?: string;
}
