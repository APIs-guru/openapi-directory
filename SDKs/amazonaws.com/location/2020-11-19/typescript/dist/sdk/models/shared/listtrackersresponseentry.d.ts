import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";
/**
 * Contains the tracker resource details.
**/
export declare class ListTrackersResponseEntry extends SpeakeasyBase {
    createTime: Date;
    description: string;
    pricingPlan: PricingPlanEnum;
    pricingPlanDataSource?: string;
    trackerName: string;
    updateTime: Date;
}
