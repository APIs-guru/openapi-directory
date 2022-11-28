import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnalyticsLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class GetAnalyticsLiveStreamsLiveStreamIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: string;
}


export class GetAnalyticsLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAnalyticsLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnalyticsLiveStreamsLiveStreamIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnalyticsLiveStreamsLiveStreamIdQueryParams;

  @SpeakeasyMetadata()
  security: GetAnalyticsLiveStreamsLiveStreamIdSecurity;
}


export class GetAnalyticsLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  rawStatisticsListLiveStreamAnalyticsResponse?: shared.RawStatisticsListLiveStreamAnalyticsResponse;
}
