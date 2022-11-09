import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationEnum } from "./destinationenum";
import { LogTypeEnum } from "./logtypeenum";


// LogSettingsRequest
/** 
 * Settings used to configure delivery mode and destination for conversation logs.
**/
export class LogSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: DestinationEnum;

  @Metadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=logType" })
  logType: LogTypeEnum;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
