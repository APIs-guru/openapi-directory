import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelRotateSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
