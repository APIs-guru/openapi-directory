import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentsProgramPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payments_program_type" })
  paymentsProgramType: string;
}


export class GetPaymentsProgramSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentsProgramRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentsProgramPathParams;

  @Metadata()
  security: GetPaymentsProgramSecurity;
}


export class GetPaymentsProgramResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentsProgramResponse?: shared.PaymentsProgramResponse;

  @Metadata()
  statusCode: number;
}
