import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSecretValueRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;

  @Metadata({ data: "json, name=VersionStage" })
  versionStage?: string;
}
