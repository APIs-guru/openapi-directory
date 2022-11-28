import { SpeakeasyBase } from "../../../internal/utils";
import { MapConfiguration } from "./mapconfiguration";
import { PricingPlanEnum } from "./pricingplanenum";
export declare class DescribeMapResponse extends SpeakeasyBase {
    configuration: MapConfiguration;
    createTime: Date;
    dataSource: string;
    description: string;
    mapArn: string;
    mapName: string;
    pricingPlan: PricingPlanEnum;
    tags?: Map<string, string>;
    updateTime: Date;
}
