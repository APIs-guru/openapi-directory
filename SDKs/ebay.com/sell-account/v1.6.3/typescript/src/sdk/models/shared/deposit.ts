import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";



// Deposit
/** 
 * A container that describes the details of a deposit. Used only with motor listings.
**/
export class Deposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=dueIn" })
  dueIn?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=paymentMethods", elemType: PaymentMethod })
  paymentMethods?: PaymentMethod[];
}
