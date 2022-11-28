import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockPublicPolicy" })
  blockPublicPolicy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResourcePolicy" })
  resourcePolicy: string;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
