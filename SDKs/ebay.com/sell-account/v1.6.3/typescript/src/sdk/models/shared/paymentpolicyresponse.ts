import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentPolicy } from "./paymentpolicy";



// PaymentPolicyResponse
/** 
 * The response payload for payment policy requests.
**/
export class PaymentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentPolicies", elemType: PaymentPolicy })
  paymentPolicies?: PaymentPolicy[];

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
