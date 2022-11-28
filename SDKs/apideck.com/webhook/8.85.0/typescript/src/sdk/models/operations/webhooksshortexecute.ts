import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebhooksShortExecutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class WebhooksShortExecuteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=e" })
  e?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=l_id" })
  lId?: string;
}


export class WebhooksShortExecuteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class WebhooksShortExecuteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebhooksShortExecutePathParams;

  @SpeakeasyMetadata()
  queryParams: WebhooksShortExecuteQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: WebhooksShortExecuteSecurity;
}


export class WebhooksShortExecuteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  executeWebhookResponse?: shared.ExecuteWebhookResponse;

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
