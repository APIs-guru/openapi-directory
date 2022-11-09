import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSecretValueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SecretBinary" })
  secretBinary?: string;

  @Metadata({ data: "json, name=SecretString" })
  secretString?: string;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;

  @Metadata({ data: "json, name=VersionStages" })
  versionStages?: string[];
}
