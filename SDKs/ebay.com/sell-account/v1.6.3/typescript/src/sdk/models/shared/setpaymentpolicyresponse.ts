import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";
import { Error } from "./error";



// SetPaymentPolicyResponse
/** 
 * Complex type that that gets populated with a response containing a payment policy.
**/
export class SetPaymentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType })
  categoryTypes?: CategoryType[];

  @SpeakeasyMetadata({ data: "json, name=deposit" })
  deposit?: Deposit;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fullPaymentDueIn" })
  fullPaymentDueIn?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=immediatePay" })
  immediatePay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentInstructions" })
  paymentInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethods", elemType: PaymentMethod })
  paymentMethods?: PaymentMethod[];

  @SpeakeasyMetadata({ data: "json, name=paymentPolicyId" })
  paymentPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
