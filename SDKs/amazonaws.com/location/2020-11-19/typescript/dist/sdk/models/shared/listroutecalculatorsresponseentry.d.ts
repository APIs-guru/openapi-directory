import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PricingPlanEnum } from "./pricingplanenum";
/**
 * A route calculator resource listed in your AWS account.
**/
export declare class ListRouteCalculatorsResponseEntry extends SpeakeasyBase {
    calculatorName: string;
    createTime: Date;
    dataSource: string;
    description: string;
    pricingPlan: PricingPlanEnum;
    updateTime: Date;
}
