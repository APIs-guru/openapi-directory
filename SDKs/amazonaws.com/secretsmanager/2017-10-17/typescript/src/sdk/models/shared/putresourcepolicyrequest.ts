import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockPublicPolicy" })
  blockPublicPolicy?: boolean;

  @Metadata({ data: "json, name=ResourcePolicy" })
  resourcePolicy: string;

  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
