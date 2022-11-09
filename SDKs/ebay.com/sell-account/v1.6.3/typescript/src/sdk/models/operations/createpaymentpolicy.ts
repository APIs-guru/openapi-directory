import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePaymentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreatePaymentPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentPolicyRequest;

  @Metadata()
  security: CreatePaymentPolicySecurity;
}


export class CreatePaymentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;

  @Metadata()
  statusCode: number;
}
