import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";



// ListGeofenceCollectionsResponseEntry
/** 
 * Contains the geofence collection details.
**/
export class ListGeofenceCollectionsResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
