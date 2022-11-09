import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilteredLogEvent
/** 
 * Represents a matched event.
**/
export class FilteredLogEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=ingestionTime" })
  ingestionTime?: number;

  @Metadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
