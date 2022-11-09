import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventData
/** 
 * Represents all the details pertaining to an event.
**/
export class EventData extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventAction" })
  eventAction?: string;

  @Metadata({ data: "json, name=eventCategory" })
  eventCategory?: string;

  @Metadata({ data: "json, name=eventCount" })
  eventCount?: string;

  @Metadata({ data: "json, name=eventLabel" })
  eventLabel?: string;

  @Metadata({ data: "json, name=eventValue" })
  eventValue?: string;
}
