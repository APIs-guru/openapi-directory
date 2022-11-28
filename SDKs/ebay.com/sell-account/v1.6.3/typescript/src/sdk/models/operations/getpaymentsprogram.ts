import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentsProgramPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payments_program_type" })
  paymentsProgramType: string;
}


export class GetPaymentsProgramSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentsProgramRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentsProgramPathParams;

  @SpeakeasyMetadata()
  security: GetPaymentsProgramSecurity;
}


export class GetPaymentsProgramResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentsProgramResponse?: shared.PaymentsProgramResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
