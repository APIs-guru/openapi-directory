import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ModifiersOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ModifiersOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: shared.ModifierGroupFilter;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class ModifiersOneHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId?: string;
}


export class ModifiersOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ModifiersOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModifiersOnePathParams;

  @SpeakeasyMetadata()
  queryParams: ModifiersOneQueryParams;

  @SpeakeasyMetadata()
  headers: ModifiersOneHeaders;

  @SpeakeasyMetadata()
  security: ModifiersOneSecurity;
}


export class ModifiersOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getModifierResponse?: shared.GetModifierResponse;

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
