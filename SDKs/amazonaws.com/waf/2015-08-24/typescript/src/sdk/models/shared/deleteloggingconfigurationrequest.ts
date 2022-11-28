import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLoggingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
