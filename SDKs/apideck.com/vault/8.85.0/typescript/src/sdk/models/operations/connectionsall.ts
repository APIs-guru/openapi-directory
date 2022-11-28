import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConnectionsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api" })
  api?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configured" })
  configured?: boolean;
}


export class ConnectionsAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;
}


export class ConnectionsAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConnectionsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ConnectionsAllQueryParams;

  @SpeakeasyMetadata()
  headers: ConnectionsAllHeaders;

  @SpeakeasyMetadata()
  security: ConnectionsAllSecurity;
}


export class ConnectionsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConnectionsResponse?: shared.GetConnectionsResponse;

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
