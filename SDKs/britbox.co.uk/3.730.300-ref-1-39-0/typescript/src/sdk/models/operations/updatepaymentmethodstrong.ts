import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePaymentMethodStrongPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class UpdatePaymentMethodStrongQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpdatePaymentMethodStrongSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpdatePaymentMethodStrongRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePaymentMethodStrongPathParams;

  @Metadata()
  queryParams: UpdatePaymentMethodStrongQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvUpdatePaymentStrongRequest;

  @Metadata()
  security: UpdatePaymentMethodStrongSecurity;
}


export class UpdatePaymentMethodStrongResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
