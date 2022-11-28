import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputLogEvent
/** 
 * Represents a log event.
**/
export class OutputLogEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ingestionTime" })
  ingestionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
