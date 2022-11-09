import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputLogEvent
/** 
 * Represents a log event.
**/
export class OutputLogEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingestionTime" })
  ingestionTime?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
