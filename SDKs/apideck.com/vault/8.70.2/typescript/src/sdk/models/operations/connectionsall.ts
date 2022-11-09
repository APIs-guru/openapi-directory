import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConnectionsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api" })
  api?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=configured" })
  configured?: boolean;
}


export class ConnectionsAllHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;
}


export class ConnectionsAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConnectionsAllRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ConnectionsAllQueryParams;

  @Metadata()
  headers: ConnectionsAllHeaders;

  @Metadata()
  security: ConnectionsAllSecurity;
}


export class ConnectionsAllResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  getConnectionsResponse?: shared.GetConnectionsResponse;

  @Metadata()
  notFoundResponse?: shared.NotFoundResponse;

  @Metadata()
  paymentRequiredResponse?: shared.PaymentRequiredResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedResponse?: shared.UnauthorizedResponse;

  @Metadata()
  unexpectedErrorResponse?: shared.UnexpectedErrorResponse;

  @Metadata()
  unprocessableResponse?: shared.UnprocessableResponse;
}
