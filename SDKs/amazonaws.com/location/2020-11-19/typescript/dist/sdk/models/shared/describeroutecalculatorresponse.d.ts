import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";
export declare class DescribeRouteCalculatorResponse extends SpeakeasyBase {
    calculatorArn: string;
    calculatorName: string;
    createTime: Date;
    dataSource: string;
    description: string;
    pricingPlan: PricingPlanEnum;
    tags?: Map<string, string>;
    updateTime: Date;
}
