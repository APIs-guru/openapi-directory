import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanEnum } from "./pricingplanenum";



// ListPlaceIndexesResponseEntry
/** 
 * A place index resource listed in your AWS account.
**/
export class ListPlaceIndexesResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
