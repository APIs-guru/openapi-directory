import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { PricingPlanEnum } from "./pricingplanenum";
export declare class DescribePlaceIndexResponse extends SpeakeasyBase {
    createTime: Date;
    dataSource: string;
    dataSourceConfiguration: DataSourceConfiguration;
    description: string;
    indexArn: string;
    indexName: string;
    pricingPlan: PricingPlanEnum;
    tags?: Map<string, string>;
    updateTime: Date;
}
