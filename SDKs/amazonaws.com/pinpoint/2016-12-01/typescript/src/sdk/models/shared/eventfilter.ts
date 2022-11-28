import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDimensions } from "./eventdimensions";
import { FilterTypeEnum } from "./filtertypeenum";



// EventFilter
/** 
 * Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
**/
export class EventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions: EventDimensions;

  @SpeakeasyMetadata({ data: "json, name=FilterType" })
  filterType: FilterTypeEnum;
}
