import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePaymentIntentStrongPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class UpdatePaymentIntentStrongQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpdatePaymentIntentStrongSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpdatePaymentIntentStrongRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePaymentIntentStrongPathParams;

  @Metadata()
  queryParams: UpdatePaymentIntentStrongQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvUpdateIntentStrongRequest;

  @Metadata()
  security: UpdatePaymentIntentStrongSecurity;
}


export class UpdatePaymentIntentStrongResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvUpdateIntentStrongResponse?: shared.ItvUpdateIntentStrongResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
