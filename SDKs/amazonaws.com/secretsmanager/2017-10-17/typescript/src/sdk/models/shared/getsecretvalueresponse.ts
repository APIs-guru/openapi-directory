import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSecretValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretBinary" })
  secretBinary?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretString" })
  secretString?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionStages" })
  versionStages?: string[];
}
