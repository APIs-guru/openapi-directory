import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
