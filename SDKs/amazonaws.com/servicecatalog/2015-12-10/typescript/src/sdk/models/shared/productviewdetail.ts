import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSummary } from "./productviewsummary";
import { StatusEnum } from "./statusenum";



// ProductViewDetail
/** 
 * Information about a product view.
**/
export class ProductViewDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProductARN" })
  productArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
