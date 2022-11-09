import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PricingPlanEnum } from "./pricingplanenum";


// ListPlaceIndexesResponseEntry
/** 
 * A place index resource listed in your AWS account.
**/
export class ListPlaceIndexesResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: PricingPlanEnum;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
