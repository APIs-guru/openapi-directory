import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";
export declare class DescribeGeofenceCollectionResponse extends SpeakeasyBase {
    collectionArn: string;
    collectionName: string;
    createTime: Date;
    description: string;
    kmsKeyId?: string;
    pricingPlan: PricingPlanEnum;
    pricingPlanDataSource?: string;
    tags?: Map<string, string>;
    updateTime: Date;
}
