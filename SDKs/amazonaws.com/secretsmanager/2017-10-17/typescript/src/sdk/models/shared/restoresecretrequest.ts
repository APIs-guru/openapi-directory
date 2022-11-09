import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
