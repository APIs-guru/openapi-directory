import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=categoryTypes", elemType: shared.CategoryType })
  categoryTypes?: CategoryType[];

  @Metadata({ data: "json, name=deposit" })
  deposit?: Deposit;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fullPaymentDueIn" })
  fullPaymentDueIn?: TimeDuration;

  @Metadata({ data: "json, name=immediatePay" })
  immediatePay?: boolean;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=paymentInstructions" })
  paymentInstructions?: string;

  @Metadata({ data: "json, name=paymentMethods", elemType: shared.PaymentMethod })
  paymentMethods?: PaymentMethod[];

  @Metadata({ data: "json, name=paymentPolicyId" })
  paymentPolicyId?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
