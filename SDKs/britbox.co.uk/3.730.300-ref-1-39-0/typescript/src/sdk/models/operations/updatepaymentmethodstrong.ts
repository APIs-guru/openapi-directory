import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePaymentMethodStrongPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class UpdatePaymentMethodStrongQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpdatePaymentMethodStrongSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpdatePaymentMethodStrongRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePaymentMethodStrongPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdatePaymentMethodStrongQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvUpdatePaymentStrongRequest;

  @SpeakeasyMetadata()
  security: UpdatePaymentMethodStrongSecurity;
}


export class UpdatePaymentMethodStrongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
