import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConnectorsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: shared.ConnectorsFilter;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ConnectorsAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class ConnectorsAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConnectorsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ConnectorsAllQueryParams;

  @SpeakeasyMetadata()
  headers: ConnectorsAllHeaders;

  @SpeakeasyMetadata()
  security: ConnectorsAllSecurity;
}


export class ConnectorsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConnectorsResponse?: shared.GetConnectorsResponse;

  @SpeakeasyMetadata()
  paymentRequiredResponse?: shared.PaymentRequiredResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedResponse?: shared.UnauthorizedResponse;

  @SpeakeasyMetadata()
  unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
