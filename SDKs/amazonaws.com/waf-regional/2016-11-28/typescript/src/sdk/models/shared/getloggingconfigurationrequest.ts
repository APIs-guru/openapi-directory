import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoggingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
