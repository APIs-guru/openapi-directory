import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMap } from "./eventcategoriesmap";



export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMap })
  eventCategoriesMapList?: EventCategoriesMap[];
}
