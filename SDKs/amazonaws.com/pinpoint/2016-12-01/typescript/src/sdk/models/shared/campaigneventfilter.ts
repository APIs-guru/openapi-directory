import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventDimensions } from "./eventdimensions";
import { FilterTypeEnum } from "./filtertypeenum";


// CampaignEventFilter
/** 
 * Specifies the settings for events that cause a campaign to be sent.
**/
export class CampaignEventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions: EventDimensions;

  @Metadata({ data: "json, name=FilterType" })
  filterType: FilterTypeEnum;
}
