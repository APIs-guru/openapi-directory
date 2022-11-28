import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MapConfiguration } from "./mapconfiguration";
import { PricingPlanEnum } from "./pricingplanenum";



export class DescribeMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration: MapConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=MapArn" })
  mapArn: string;

  @SpeakeasyMetadata({ data: "json, name=MapName" })
  mapName: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
