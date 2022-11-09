import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
