import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PricingPlanEnum } from "./pricingplanenum";


export class DescribeRouteCalculatorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalculatorArn" })
  calculatorArn: string;

  @Metadata({ data: "json, name=CalculatorName" })
  calculatorName: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
