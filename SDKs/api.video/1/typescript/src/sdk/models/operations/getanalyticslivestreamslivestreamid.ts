import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnalyticsLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class GetAnalyticsLiveStreamsLiveStreamIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: string;
}


export class GetAnalyticsLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAnalyticsLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnalyticsLiveStreamsLiveStreamIdPathParams;

  @Metadata()
  queryParams: GetAnalyticsLiveStreamsLiveStreamIdQueryParams;

  @Metadata()
  security: GetAnalyticsLiveStreamsLiveStreamIdSecurity;
}


export class GetAnalyticsLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  rawStatisticsListLiveStreamAnalyticsResponse?: shared.RawStatisticsListLiveStreamAnalyticsResponse;
}
