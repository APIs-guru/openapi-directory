import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMap } from "./eventcategoriesmap";



// EventCategoriesMessage
/** 
 * <p/>
**/
export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMap })
  eventCategoriesMapList?: EventCategoriesMap[];
}
