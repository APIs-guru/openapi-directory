import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConnectorResourcesOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;
}


export class ConnectorResourcesOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unified_api" })
  unifiedApi?: shared.UnifiedApiIdEnum;
}


export class ConnectorResourcesOneHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class ConnectorResourcesOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConnectorResourcesOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConnectorResourcesOnePathParams;

  @SpeakeasyMetadata()
  queryParams: ConnectorResourcesOneQueryParams;

  @SpeakeasyMetadata()
  headers: ConnectorResourcesOneHeaders;

  @SpeakeasyMetadata()
  security: ConnectorResourcesOneSecurity;
}


export class ConnectorResourcesOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConnectorResourceResponse?: shared.GetConnectorResourceResponse;

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
}
