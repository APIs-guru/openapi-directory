import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;
}
