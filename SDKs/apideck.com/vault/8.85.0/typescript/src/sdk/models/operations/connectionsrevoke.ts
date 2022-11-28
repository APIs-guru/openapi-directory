import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConnectionsRevokePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
  serviceId: string;
}


export class ConnectionsRevokeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class ConnectionsRevokeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConnectionsRevokePathParams;

  @SpeakeasyMetadata()
  queryParams: ConnectionsRevokeQueryParams;
}


export class ConnectionsRevokeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

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
