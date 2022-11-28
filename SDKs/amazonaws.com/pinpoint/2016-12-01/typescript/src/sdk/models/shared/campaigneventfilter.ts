import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDimensions } from "./eventdimensions";
import { FilterTypeEnum } from "./filtertypeenum";



// CampaignEventFilter
/** 
 * Specifies the settings for events that cause a campaign to be sent.
**/
export class CampaignEventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions: EventDimensions;

  @SpeakeasyMetadata({ data: "json, name=FilterType" })
  filterType: FilterTypeEnum;
}
