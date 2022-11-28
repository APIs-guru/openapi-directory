import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventInfoMap
/** 
 * Describes event information.
**/
export class EventInfoMap extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  eventDescription?: string;

  @SpeakeasyMetadata()
  eventId?: string;

  @SpeakeasyMetadata()
  severity?: string;
}
