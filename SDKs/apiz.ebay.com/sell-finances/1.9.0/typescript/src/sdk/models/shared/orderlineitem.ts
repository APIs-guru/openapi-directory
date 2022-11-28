import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Fee } from "./fee";



// OrderLineItem
/** 
 * This type is used to show the fees that are deducted from a seller payout for each line item in an order.
**/
export class OrderLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feeBasisAmount" })
  feeBasisAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceFees", elemType: Fee })
  marketplaceFees?: Fee[];
}
