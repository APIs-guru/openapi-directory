import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalyticsSessionsSessionIdEventsPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class GetAnalyticsSessionsSessionIdEventsQueryParams extends SpeakeasyBase {
    currentPage?: number;
    pageSize?: number;
}
export declare class GetAnalyticsSessionsSessionIdEventsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAnalyticsSessionsSessionIdEventsRequest extends SpeakeasyBase {
    pathParams: GetAnalyticsSessionsSessionIdEventsPathParams;
    queryParams: GetAnalyticsSessionsSessionIdEventsQueryParams;
    security: GetAnalyticsSessionsSessionIdEventsSecurity;
}
export declare class GetAnalyticsSessionsSessionIdEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    rawStatisticsListPlayerSessionEventsResponse?: shared.RawStatisticsListPlayerSessionEventsResponse;
}
