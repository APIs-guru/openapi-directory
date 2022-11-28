import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalyticsVideosVideoIdPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class GetAnalyticsVideosVideoIdQueryParams extends SpeakeasyBase {
    currentPage?: number;
    metadata?: string[];
    pageSize?: number;
    period?: string;
}
export declare class GetAnalyticsVideosVideoIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAnalyticsVideosVideoIdRequest extends SpeakeasyBase {
    pathParams: GetAnalyticsVideosVideoIdPathParams;
    queryParams: GetAnalyticsVideosVideoIdQueryParams;
    security: GetAnalyticsVideosVideoIdSecurity;
}
export declare class GetAnalyticsVideosVideoIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    rawStatisticsListSessionsResponse?: shared.RawStatisticsListSessionsResponse;
}
