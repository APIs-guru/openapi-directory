import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationEnum } from "./destinationenum";
import { LogTypeEnum } from "./logtypeenum";



// LogSettingsResponse
/** 
 * The settings for conversation logs.
**/
export class LogSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: DestinationEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType?: LogTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcePrefix" })
  resourcePrefix?: string;
}
