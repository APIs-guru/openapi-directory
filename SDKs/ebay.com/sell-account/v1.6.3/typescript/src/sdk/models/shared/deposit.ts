import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Amount } from "./amount";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";


// Deposit
/** 
 * A container that describes the details of a deposit. Used only with motor listings.
**/
export class Deposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=dueIn" })
  dueIn?: TimeDuration;

  @Metadata({ data: "json, name=paymentMethods", elemType: shared.PaymentMethod })
  paymentMethods?: PaymentMethod[];
}
