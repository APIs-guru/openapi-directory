import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class GetEventsHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetEventsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
    headers: GetEventsHeaders;
    security: GetEventsSecurity;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    eventSearchResponse?: shared.EventSearchResponse;
    statusCode: number;
}
