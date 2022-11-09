import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;
}


export class GetPaymentPoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPaymentPoliciesQueryParams;

  @Metadata()
  security: GetPaymentPoliciesSecurity;
}


export class GetPaymentPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentPolicyResponse?: shared.PaymentPolicyResponse;

  @Metadata()
  statusCode: number;
}
