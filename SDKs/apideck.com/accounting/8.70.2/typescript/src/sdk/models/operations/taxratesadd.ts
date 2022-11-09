import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TaxRatesAddQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class TaxRatesAddHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId?: string;
}


export class TaxRatesAddSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class TaxRatesAddRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TaxRatesAddQueryParams;

  @Metadata()
  headers: TaxRatesAddHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TaxRate;

  @Metadata()
  security: TaxRatesAddSecurity;
}


export class TaxRatesAddResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  createTaxRateResponse?: shared.CreateTaxRateResponse;

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
