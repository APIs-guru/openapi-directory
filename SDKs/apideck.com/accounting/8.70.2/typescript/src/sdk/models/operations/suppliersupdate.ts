import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuppliersUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SuppliersUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class SuppliersUpdateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId?: string;
}


export class SuppliersUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class SuppliersUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SuppliersUpdatePathParams;

  @Metadata()
  queryParams: SuppliersUpdateQueryParams;

  @Metadata()
  headers: SuppliersUpdateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Supplier;

  @Metadata()
  security: SuppliersUpdateSecurity;
}


export class SuppliersUpdateResponse extends SpeakeasyBase {
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

  @Metadata()
  updateSupplierResponse?: shared.UpdateSupplierResponse;
}
