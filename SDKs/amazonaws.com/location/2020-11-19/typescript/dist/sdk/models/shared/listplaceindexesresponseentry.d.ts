import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";
/**
 * A place index resource listed in your AWS account.
**/
export declare class ListPlaceIndexesResponseEntry extends SpeakeasyBase {
    createTime: Date;
    dataSource: string;
    description: string;
    indexName: string;
    pricingPlan: PricingPlanEnum;
    updateTime: Date;
}
