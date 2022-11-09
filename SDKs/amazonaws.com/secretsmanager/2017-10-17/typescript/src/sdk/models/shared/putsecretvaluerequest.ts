import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutSecretValueRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=SecretBinary" })
  secretBinary?: string;

  @Metadata({ data: "json, name=SecretId" })
  secretId: string;

  @Metadata({ data: "json, name=SecretString" })
  secretString?: string;

  @Metadata({ data: "json, name=VersionStages" })
  versionStages?: string[];
}
