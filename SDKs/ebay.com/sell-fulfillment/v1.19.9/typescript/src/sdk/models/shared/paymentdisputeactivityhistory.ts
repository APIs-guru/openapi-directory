import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentDisputeActivity } from "./paymentdisputeactivity";


// PaymentDisputeActivityHistory
/** 
 * This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
**/
export class PaymentDisputeActivityHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity", elemType: shared.PaymentDisputeActivity })
  activity?: PaymentDisputeActivity[];
}
