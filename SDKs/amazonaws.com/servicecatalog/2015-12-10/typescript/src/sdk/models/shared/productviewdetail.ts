import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductViewSummary } from "./productviewsummary";
import { StatusEnum } from "./statusenum";


// ProductViewDetail
/** 
 * Information about a product view.
**/
export class ProductViewDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=ProductARN" })
  productArn?: string;

  @Metadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
