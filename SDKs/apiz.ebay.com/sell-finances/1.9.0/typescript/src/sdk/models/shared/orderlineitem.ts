import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Amount } from "./amount";
import { Fee } from "./fee";


// OrderLineItem
/** 
 * This type is used to show the fees that are deducted from a seller payout for each line item in an order.
**/
export class OrderLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=feeBasisAmount" })
  feeBasisAmount?: Amount;

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=marketplaceFees", elemType: shared.Fee })
  marketplaceFees?: Fee[];
}
