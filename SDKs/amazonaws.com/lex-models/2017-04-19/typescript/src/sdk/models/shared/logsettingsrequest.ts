import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationEnum } from "./destinationenum";
import { LogTypeEnum } from "./logtypeenum";



// LogSettingsRequest
/** 
 * Settings used to configure delivery mode and destination for conversation logs.
**/
export class LogSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: DestinationEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType: LogTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
