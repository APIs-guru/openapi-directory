import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PricingPlanEnum } from "./pricingplanenum";


// ListTrackersResponseEntry
/** 
 * Contains the tracker resource details.
**/
export class ListTrackersResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @Metadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;

  @Metadata({ data: "json, name=TrackerName" })
  trackerName: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
