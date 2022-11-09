import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentPolicyByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetPaymentPolicyByNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentPolicyByNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPaymentPolicyByNameQueryParams;

  @Metadata()
  security: GetPaymentPolicyByNameSecurity;
}


export class GetPaymentPolicyByNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentPolicy?: shared.PaymentPolicy;

  @Metadata()
  statusCode: number;
}
