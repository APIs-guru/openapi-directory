import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentDisputeActivity
/** 
 * This type is used by each recorded activity on a payment dispute, from creation to resolution.
**/
export class PaymentDisputeActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityDate" })
  activityDate?: string;

  @Metadata({ data: "json, name=activityType" })
  activityType?: string;

  @Metadata({ data: "json, name=actor" })
  actor?: string;
}
