import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Amount } from "./amount";
import { PaymentHold } from "./paymenthold";


// Payment
/** 
 * This type is used to provide details about the seller payments for an order.
**/
export class Payment extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=paymentDate" })
  paymentDate?: string;

  @Metadata({ data: "json, name=paymentHolds", elemType: shared.PaymentHold })
  paymentHolds?: PaymentHold[];

  @Metadata({ data: "json, name=paymentMethod" })
  paymentMethod?: string;

  @Metadata({ data: "json, name=paymentReferenceId" })
  paymentReferenceId?: string;

  @Metadata({ data: "json, name=paymentStatus" })
  paymentStatus?: string;
}
