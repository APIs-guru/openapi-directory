import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// AppliedPromotion
/** 
 * This type contains information about a sales promotion that is applied to a line item.
**/
export class AppliedPromotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=promotionId" })
  promotionId?: string;
}
