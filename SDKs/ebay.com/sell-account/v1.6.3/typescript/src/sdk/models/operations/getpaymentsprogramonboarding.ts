import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentsProgramOnboardingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payments_program_type" })
  paymentsProgramType: string;
}


export class GetPaymentsProgramOnboardingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentsProgramOnboardingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentsProgramOnboardingPathParams;

  @Metadata()
  security: GetPaymentsProgramOnboardingSecurity;
}


export class GetPaymentsProgramOnboardingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentsProgramOnboardingResponse?: shared.PaymentsProgramOnboardingResponse;

  @Metadata()
  statusCode: number;
}
