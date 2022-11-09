import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLoggingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
