import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnalyticsSessionsSessionIdEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class GetAnalyticsSessionsSessionIdEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetAnalyticsSessionsSessionIdEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAnalyticsSessionsSessionIdEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnalyticsSessionsSessionIdEventsPathParams;

  @Metadata()
  queryParams: GetAnalyticsSessionsSessionIdEventsQueryParams;

  @Metadata()
  security: GetAnalyticsSessionsSessionIdEventsSecurity;
}


export class GetAnalyticsSessionsSessionIdEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  rawStatisticsListPlayerSessionEventsResponse?: shared.RawStatisticsListPlayerSessionEventsResponse;
}
