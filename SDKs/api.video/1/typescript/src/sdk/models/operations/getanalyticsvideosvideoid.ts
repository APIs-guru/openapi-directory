import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnalyticsVideosVideoIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetAnalyticsVideosVideoIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metadata" })
  metadata?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: string;
}


export class GetAnalyticsVideosVideoIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAnalyticsVideosVideoIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnalyticsVideosVideoIdPathParams;

  @Metadata()
  queryParams: GetAnalyticsVideosVideoIdQueryParams;

  @Metadata()
  security: GetAnalyticsVideosVideoIdSecurity;
}


export class GetAnalyticsVideosVideoIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  rawStatisticsListSessionsResponse?: shared.RawStatisticsListSessionsResponse;
}
