import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PricingPlanEnum } from "./pricingplanenum";


// ListGeofenceCollectionsResponseEntry
/** 
 * Contains the geofence collection details.
**/
export class ListGeofenceCollectionsResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @Metadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
