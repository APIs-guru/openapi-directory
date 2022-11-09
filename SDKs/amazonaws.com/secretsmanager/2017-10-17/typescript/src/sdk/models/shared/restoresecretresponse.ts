import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreSecretResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
