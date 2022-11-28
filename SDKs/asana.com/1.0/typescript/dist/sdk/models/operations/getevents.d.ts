import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
    resource: string;
    sync?: string;
}
/**
 * The full record for all events that have occurred since the sync token was created.
**/
export declare class GetEvents200ApplicationJson extends SpeakeasyBase {
    data?: shared.EventResponse[];
    sync?: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getEvents200ApplicationJsonObject?: GetEvents200ApplicationJson;
}
