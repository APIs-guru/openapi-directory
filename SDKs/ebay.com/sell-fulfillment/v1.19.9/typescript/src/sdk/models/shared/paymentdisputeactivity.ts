import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentDisputeActivity
/** 
 * This type is used by each recorded activity on a payment dispute, from creation to resolution.
**/
export class PaymentDisputeActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityDate" })
  activityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType?: string;

  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: string;
}
