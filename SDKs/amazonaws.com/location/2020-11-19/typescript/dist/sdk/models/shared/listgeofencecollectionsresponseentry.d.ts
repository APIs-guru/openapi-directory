import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";
/**
 * Contains the geofence collection details.
**/
export declare class ListGeofenceCollectionsResponseEntry extends SpeakeasyBase {
    collectionName: string;
    createTime: Date;
    description: string;
    pricingPlan: PricingPlanEnum;
    pricingPlanDataSource?: string;
    updateTime: Date;
}
