import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalyticsLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
    liveStreamId: string;
}
export declare class GetAnalyticsLiveStreamsLiveStreamIdQueryParams extends SpeakeasyBase {
    currentPage?: number;
    pageSize?: number;
    period?: string;
}
export declare class GetAnalyticsLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAnalyticsLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
    pathParams: GetAnalyticsLiveStreamsLiveStreamIdPathParams;
    queryParams: GetAnalyticsLiveStreamsLiveStreamIdQueryParams;
    security: GetAnalyticsLiveStreamsLiveStreamIdSecurity;
}
export declare class GetAnalyticsLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    rawStatisticsListLiveStreamAnalyticsResponse?: shared.RawStatisticsListLiveStreamAnalyticsResponse;
}
