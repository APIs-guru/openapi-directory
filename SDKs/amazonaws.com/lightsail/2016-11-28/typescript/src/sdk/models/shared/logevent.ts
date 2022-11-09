import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogEvent
/** 
 * Describes a database log event.
**/
export class LogEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
