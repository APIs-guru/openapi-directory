import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoggingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
