import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSecretVersionStageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MoveToVersionId" })
  moveToVersionId?: string;

  @Metadata({ data: "json, name=RemoveFromVersionId" })
  removeFromVersionId?: string;

  @Metadata({ data: "json, name=SecretId" })
  secretId: string;

  @Metadata({ data: "json, name=VersionStage" })
  versionStage: string;
}
