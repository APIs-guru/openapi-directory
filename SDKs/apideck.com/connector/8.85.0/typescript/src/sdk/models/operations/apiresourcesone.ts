import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiResourcesOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;
}


export class ApiResourcesOneHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class ApiResourcesOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiResourcesOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiResourcesOnePathParams;

  @SpeakeasyMetadata()
  headers: ApiResourcesOneHeaders;

  @SpeakeasyMetadata()
  security: ApiResourcesOneSecurity;
}


export class ApiResourcesOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiResourceResponse?: shared.GetApiResourceResponse;

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
