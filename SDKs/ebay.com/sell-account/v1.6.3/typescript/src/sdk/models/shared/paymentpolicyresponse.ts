import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentPolicy } from "./paymentpolicy";


// PaymentPolicyResponse
/** 
 * The response payload for payment policy requests.
**/
export class PaymentPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=paymentPolicies", elemType: shared.PaymentPolicy })
  paymentPolicies?: PaymentPolicy[];

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
