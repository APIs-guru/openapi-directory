import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
