import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnalyticsVideosVideoIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetAnalyticsVideosVideoIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadata" })
  metadata?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: string;
}


export class GetAnalyticsVideosVideoIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAnalyticsVideosVideoIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnalyticsVideosVideoIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnalyticsVideosVideoIdQueryParams;

  @SpeakeasyMetadata()
  security: GetAnalyticsVideosVideoIdSecurity;
}


export class GetAnalyticsVideosVideoIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  rawStatisticsListSessionsResponse?: shared.RawStatisticsListSessionsResponse;
}
