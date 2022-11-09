import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddPaymentMethodQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class AddPaymentMethodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class AddPaymentMethodRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddPaymentMethodQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddPaymentMethodRequest;

  @Metadata()
  security: AddPaymentMethodSecurity;
}


export class AddPaymentMethodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentMethod?: shared.PaymentMethod;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
