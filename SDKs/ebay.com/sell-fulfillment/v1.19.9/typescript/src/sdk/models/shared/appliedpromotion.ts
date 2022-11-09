import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// AppliedPromotion
/** 
 * This type contains information about a sales promotion that is applied to a line item.
**/
export class AppliedPromotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discountAmount" })
  discountAmount?: Amount;

  @Metadata({ data: "json, name=promotionId" })
  promotionId?: string;
}
