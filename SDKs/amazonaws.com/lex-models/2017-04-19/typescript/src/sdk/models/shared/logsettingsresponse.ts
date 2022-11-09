import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationEnum } from "./destinationenum";
import { LogTypeEnum } from "./logtypeenum";


// LogSettingsResponse
/** 
 * The settings for conversation logs.
**/
export class LogSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: DestinationEnum;

  @Metadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=logType" })
  logType?: LogTypeEnum;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=resourcePrefix" })
  resourcePrefix?: string;
}
