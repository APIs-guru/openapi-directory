import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentMethodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPaymentMethodQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPaymentMethodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetPaymentMethodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentMethodPathParams;

  @Metadata()
  queryParams: GetPaymentMethodQueryParams;

  @Metadata()
  security: GetPaymentMethodSecurity;
}


export class GetPaymentMethodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentMethod?: shared.PaymentMethod;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
