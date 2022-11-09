import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MapConfiguration } from "./mapconfiguration";
import { PricingPlanEnum } from "./pricingplanenum";


export class DescribeMapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration: MapConfiguration;

  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=MapArn" })
  mapArn: string;

  @Metadata({ data: "json, name=MapName" })
  mapName: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
