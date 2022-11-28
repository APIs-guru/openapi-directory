import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";
export declare class DescribeTrackerResponse extends SpeakeasyBase {
    createTime: Date;
    description: string;
    kmsKeyId?: string;
    pricingPlan: PricingPlanEnum;
    pricingPlanDataSource?: string;
    tags?: Map<string, string>;
    trackerArn: string;
    trackerName: string;
    updateTime: Date;
}
