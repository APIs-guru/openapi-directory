import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";
/**
 * Contains details of an existing map resource in your AWS account.
**/
export declare class ListMapsResponseEntry extends SpeakeasyBase {
    createTime: Date;
    dataSource: string;
    description: string;
    mapName: string;
    pricingPlan: PricingPlanEnum;
    updateTime: Date;
}
