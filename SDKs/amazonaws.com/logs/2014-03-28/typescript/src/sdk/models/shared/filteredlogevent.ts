import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilteredLogEvent
/** 
 * Represents a matched event.
**/
export class FilteredLogEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=ingestionTime" })
  ingestionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
