import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSecretVersionStageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
