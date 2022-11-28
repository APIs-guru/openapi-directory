import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePaymentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreatePaymentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentPolicyRequest;

  @SpeakeasyMetadata()
  security: CreatePaymentPolicySecurity;
}


export class CreatePaymentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
