import { SpeakeasyBase } from "../../../internal/utils";
import { EventDimensions } from "./eventdimensions";
import { FilterTypeEnum } from "./filtertypeenum";
/**
 * Specifies the settings for events that cause a campaign to be sent.
**/
export declare class CampaignEventFilter extends SpeakeasyBase {
    dimensions: EventDimensions;
    filterType: FilterTypeEnum;
}
