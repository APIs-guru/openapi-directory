import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogEvent
/** 
 * Describes a database log event.
**/
export class LogEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
