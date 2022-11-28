import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMap } from "./eventcategoriesmap";



// EventCategoriesMessage
/** 
 * Data returned from the <code>DescribeEventCategories</code> operation.
**/
export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMap })
  eventCategoriesMapList?: EventCategoriesMap[];
}
