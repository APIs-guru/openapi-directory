import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDisputeActivity } from "./paymentdisputeactivity";



// PaymentDisputeActivityHistory
/** 
 * This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
**/
export class PaymentDisputeActivityHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity", elemType: PaymentDisputeActivity })
  activity?: PaymentDisputeActivity[];
}
