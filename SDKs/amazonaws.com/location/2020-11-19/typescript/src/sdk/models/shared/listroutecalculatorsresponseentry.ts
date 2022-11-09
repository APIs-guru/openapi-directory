import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PricingPlanEnum } from "./pricingplanenum";


// ListRouteCalculatorsResponseEntry
/** 
 * A route calculator resource listed in your AWS account.
**/
export class ListRouteCalculatorsResponseEntry extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
