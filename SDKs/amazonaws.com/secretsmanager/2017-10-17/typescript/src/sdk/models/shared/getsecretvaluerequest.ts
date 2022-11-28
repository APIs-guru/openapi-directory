import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSecretValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionStage" })
  versionStage?: string;
}
