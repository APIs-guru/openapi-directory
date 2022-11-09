import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { PricingPlanEnum } from "./pricingplanenum";


export class DescribePlaceIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=DataSourceConfiguration" })
  dataSourceConfiguration: DataSourceConfiguration;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=IndexArn" })
  indexArn: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
