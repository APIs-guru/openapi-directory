import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentsProgramOnboardingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payments_program_type" })
  paymentsProgramType: string;
}


export class GetPaymentsProgramOnboardingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentsProgramOnboardingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentsProgramOnboardingPathParams;

  @SpeakeasyMetadata()
  security: GetPaymentsProgramOnboardingSecurity;
}


export class GetPaymentsProgramOnboardingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentsProgramOnboardingResponse?: shared.PaymentsProgramOnboardingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
