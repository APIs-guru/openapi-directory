import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventDimensions } from "./eventdimensions";
import { FilterTypeEnum } from "./filtertypeenum";


// EventFilter
/** 
 * Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
**/
export class EventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions: EventDimensions;

  @Metadata({ data: "json, name=FilterType" })
  filterType: FilterTypeEnum;
}
