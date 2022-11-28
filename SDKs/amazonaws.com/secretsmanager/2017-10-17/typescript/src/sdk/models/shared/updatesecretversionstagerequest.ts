import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSecretVersionStageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MoveToVersionId" })
  moveToVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoveFromVersionId" })
  removeFromVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;

  @SpeakeasyMetadata({ data: "json, name=VersionStage" })
  versionStage: string;
}
