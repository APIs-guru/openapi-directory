import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RotateSecretResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;
}
