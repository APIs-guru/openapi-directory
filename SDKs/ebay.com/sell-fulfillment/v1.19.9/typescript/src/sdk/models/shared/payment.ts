import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { PaymentHold } from "./paymenthold";



// Payment
/** 
 * This type is used to provide details about the seller payments for an order.
**/
export class Payment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=paymentDate" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentHolds", elemType: PaymentHold })
  paymentHolds?: PaymentHold[];

  @SpeakeasyMetadata({ data: "json, name=paymentMethod" })
  paymentMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentReferenceId" })
  paymentReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentStatus" })
  paymentStatus?: string;
}
