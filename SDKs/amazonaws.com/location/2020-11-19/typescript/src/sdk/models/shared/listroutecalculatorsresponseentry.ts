import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";



// ListRouteCalculatorsResponseEntry
/** 
 * A route calculator resource listed in your AWS account.
**/
export class ListRouteCalculatorsResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculatorName" })
  calculatorName: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
