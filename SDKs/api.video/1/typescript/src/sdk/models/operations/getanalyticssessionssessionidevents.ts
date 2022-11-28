import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnalyticsSessionsSessionIdEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class GetAnalyticsSessionsSessionIdEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetAnalyticsSessionsSessionIdEventsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAnalyticsSessionsSessionIdEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnalyticsSessionsSessionIdEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnalyticsSessionsSessionIdEventsQueryParams;

  @SpeakeasyMetadata()
  security: GetAnalyticsSessionsSessionIdEventsSecurity;
}


export class GetAnalyticsSessionsSessionIdEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  rawStatisticsListPlayerSessionEventsResponse?: shared.RawStatisticsListPlayerSessionEventsResponse;
}
