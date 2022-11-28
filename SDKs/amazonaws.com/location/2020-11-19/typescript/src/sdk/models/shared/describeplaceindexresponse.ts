import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { PricingPlanEnum } from "./pricingplanenum";



export class DescribePlaceIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=DataSourceConfiguration" })
  dataSourceConfiguration: DataSourceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=IndexArn" })
  indexArn: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
