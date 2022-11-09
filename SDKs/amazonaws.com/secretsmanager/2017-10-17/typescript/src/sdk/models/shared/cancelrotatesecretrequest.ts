import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelRotateSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
