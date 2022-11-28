import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePaymentIntentStrongPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class UpdatePaymentIntentStrongQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpdatePaymentIntentStrongSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpdatePaymentIntentStrongRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePaymentIntentStrongPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdatePaymentIntentStrongQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvUpdateIntentStrongRequest;

  @SpeakeasyMetadata()
  security: UpdatePaymentIntentStrongSecurity;
}


export class UpdatePaymentIntentStrongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvUpdateIntentStrongResponse?: shared.ItvUpdateIntentStrongResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
