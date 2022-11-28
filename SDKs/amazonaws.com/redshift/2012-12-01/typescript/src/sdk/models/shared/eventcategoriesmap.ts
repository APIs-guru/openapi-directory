import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventInfoMap } from "./eventinfomap";



// EventCategoriesMap
/** 
 * Describes event categories.
**/
export class EventCategoriesMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventInfoMap })
  events?: EventInfoMap[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
