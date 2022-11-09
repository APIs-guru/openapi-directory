import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiResourceCoverageOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;
}


export class ApiResourceCoverageOneHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class ApiResourceCoverageOneSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiResourceCoverageOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApiResourceCoverageOnePathParams;

  @Metadata()
  headers: ApiResourceCoverageOneHeaders;

  @Metadata()
  security: ApiResourceCoverageOneSecurity;
}


export class ApiResourceCoverageOneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getApiResourceCoverageResponse?: shared.GetApiResourceCoverageResponse;

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
}
