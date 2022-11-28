import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Fee } from "./fee";
/**
 * This type is used to show the fees that are deducted from a seller payout for each line item in an order.
**/
export declare class OrderLineItem extends SpeakeasyBase {
    feeBasisAmount?: Amount;
    lineItemId?: string;
    marketplaceFees?: Fee[];
}
