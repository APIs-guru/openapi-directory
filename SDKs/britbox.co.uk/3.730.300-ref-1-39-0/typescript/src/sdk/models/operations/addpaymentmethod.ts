import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddPaymentMethodQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class AddPaymentMethodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class AddPaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AddPaymentMethodQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddPaymentMethodRequest;

  @SpeakeasyMetadata()
  security: AddPaymentMethodSecurity;
}


export class AddPaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentMethod?: shared.PaymentMethod;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
