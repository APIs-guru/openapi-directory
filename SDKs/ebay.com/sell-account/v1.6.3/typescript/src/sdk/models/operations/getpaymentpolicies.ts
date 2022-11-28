import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;
}


export class GetPaymentPoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPaymentPoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetPaymentPoliciesSecurity;
}


export class GetPaymentPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentPolicyResponse?: shared.PaymentPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
