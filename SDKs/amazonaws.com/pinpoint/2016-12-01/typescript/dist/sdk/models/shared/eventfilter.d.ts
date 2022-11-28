import { SpeakeasyBase } from "../../../internal/utils";
import { EventDimensions } from "./eventdimensions";
import { FilterTypeEnum } from "./filtertypeenum";
/**
 * Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
**/
export declare class EventFilter extends SpeakeasyBase {
    dimensions: EventDimensions;
    filterType: FilterTypeEnum;
}
