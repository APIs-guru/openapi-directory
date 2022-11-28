import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebhooksAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class WebhooksAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class WebhooksAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class WebhooksAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: WebhooksAllQueryParams;

  @SpeakeasyMetadata()
  headers: WebhooksAllHeaders;

  @SpeakeasyMetadata()
  security: WebhooksAllSecurity;
}


export class WebhooksAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getWebhooksResponse?: shared.GetWebhooksResponse;

  @SpeakeasyMetadata()
  notFoundResponse?: shared.NotFoundResponse;

  @SpeakeasyMetadata()
  paymentRequiredResponse?: shared.PaymentRequiredResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedResponse?: shared.UnauthorizedResponse;

  @SpeakeasyMetadata()
  unexpectedErrorResponse?: shared.UnexpectedErrorResponse;

  @SpeakeasyMetadata()
  unprocessableResponse?: shared.UnprocessableResponse;
}
