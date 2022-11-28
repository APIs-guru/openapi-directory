import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConnectionsTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=unified_api" })
  unifiedApi: string;
}


export class ConnectionsTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;
}


export class ConnectionsTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConnectionsTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConnectionsTokenPathParams;

  @SpeakeasyMetadata()
  headers: ConnectionsTokenHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @SpeakeasyMetadata()
  security: ConnectionsTokenSecurity;
}


export class ConnectionsTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConnectionResponse?: shared.GetConnectionResponse;

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
