import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventData
/** 
 * Represents all the details pertaining to an event.
**/
export class EventData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAction" })
  eventAction?: string;

  @SpeakeasyMetadata({ data: "json, name=eventCategory" })
  eventCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=eventCount" })
  eventCount?: string;

  @SpeakeasyMetadata({ data: "json, name=eventLabel" })
  eventLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=eventValue" })
  eventValue?: string;
}
