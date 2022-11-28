import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretBinary" })
  secretBinary?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;

  @SpeakeasyMetadata({ data: "json, name=SecretString" })
  secretString?: string;
}
