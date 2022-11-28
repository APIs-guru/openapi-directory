import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConsumerRequestCountsAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=consumer_id" })
  consumerId: string;
}


export class ConsumerRequestCountsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_datetime" })
  endDatetime: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_datetime" })
  startDatetime: string;
}


export class ConsumerRequestCountsAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class ConsumerRequestCountsAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConsumerRequestCountsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConsumerRequestCountsAllPathParams;

  @SpeakeasyMetadata()
  queryParams: ConsumerRequestCountsAllQueryParams;

  @SpeakeasyMetadata()
  headers: ConsumerRequestCountsAllHeaders;

  @SpeakeasyMetadata()
  security: ConsumerRequestCountsAllSecurity;
}


export class ConsumerRequestCountsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  consumerRequestCountsInDateRangeResponse?: shared.ConsumerRequestCountsInDateRangeResponse;

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
