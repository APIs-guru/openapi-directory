import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConsumerRequestCountsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=consumer_id" })
  consumerId: string;
}


export class ConsumerRequestCountsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_datetime" })
  endDatetime: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_datetime" })
  startDatetime: string;
}


export class ConsumerRequestCountsAllHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;
}


export class ConsumerRequestCountsAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ConsumerRequestCountsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConsumerRequestCountsAllPathParams;

  @Metadata()
  queryParams: ConsumerRequestCountsAllQueryParams;

  @Metadata()
  headers: ConsumerRequestCountsAllHeaders;

  @Metadata()
  security: ConsumerRequestCountsAllSecurity;
}


export class ConsumerRequestCountsAllResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  consumerRequestCountsInDateRangeResponse?: shared.ConsumerRequestCountsInDateRangeResponse;

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
}
