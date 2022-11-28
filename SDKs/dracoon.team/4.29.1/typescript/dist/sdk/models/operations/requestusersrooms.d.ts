import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUsersRoomsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RequestUsersRoomsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
}
export declare class RequestUsersRoomsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUsersRoomsRequest extends SpeakeasyBase {
    pathParams: RequestUsersRoomsPathParams;
    queryParams: RequestUsersRoomsQueryParams;
    headers: RequestUsersRoomsHeaders;
}
export declare class RequestUsersRoomsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roomTreeDataList?: shared.RoomTreeDataList;
    statusCode: number;
}
