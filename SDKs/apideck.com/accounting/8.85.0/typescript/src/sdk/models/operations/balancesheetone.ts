import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BalanceSheetOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: shared.BalanceSheetFilter;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=pass_through" })
  passThrough?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class BalanceSheetOneHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId?: string;
}


export class BalanceSheetOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class BalanceSheetOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BalanceSheetOneQueryParams;

  @SpeakeasyMetadata()
  headers: BalanceSheetOneHeaders;

  @SpeakeasyMetadata()
  security: BalanceSheetOneSecurity;
}


export class BalanceSheetOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getBalanceSheetResponse?: shared.GetBalanceSheetResponse;

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
