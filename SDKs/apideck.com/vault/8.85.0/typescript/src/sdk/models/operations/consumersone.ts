import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConsumersOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=consumer_id" })
  consumerId: string;
}


export class ConsumersOneHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class ConsumersOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConsumersOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConsumersOnePathParams;

  @SpeakeasyMetadata()
  headers: ConsumersOneHeaders;

  @SpeakeasyMetadata()
  security: ConsumersOneSecurity;
}


export class ConsumersOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConsumerResponse?: shared.GetConsumerResponse;

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
