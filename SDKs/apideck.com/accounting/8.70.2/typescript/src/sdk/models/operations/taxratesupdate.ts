import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TaxRatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TaxRatesUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class TaxRatesUpdateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId?: string;
}


export class TaxRatesUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class TaxRatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TaxRatesUpdatePathParams;

  @Metadata()
  queryParams: TaxRatesUpdateQueryParams;

  @Metadata()
  headers: TaxRatesUpdateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TaxRate;

  @Metadata()
  security: TaxRatesUpdateSecurity;
}


export class TaxRatesUpdateResponse extends SpeakeasyBase {
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
  updateTaxRateResponse?: shared.UpdateTaxRateResponse;
}
