import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConnectionsRevokePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
  serviceId: string;
}


export class ConnectionsRevokeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class ConnectionsRevokeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConnectionsRevokePathParams;

  @Metadata()
  queryParams: ConnectionsRevokeQueryParams;
}


export class ConnectionsRevokeResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

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
