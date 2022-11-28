import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestLastAdminRoomsUsersPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RequestLastAdminRoomsUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestLastAdminRoomsUsersRequest extends SpeakeasyBase {
    pathParams: RequestLastAdminRoomsUsersPathParams;
    headers: RequestLastAdminRoomsUsersHeaders;
}
export declare class RequestLastAdminRoomsUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    lastAdminUserRoomList?: shared.LastAdminUserRoomList;
    statusCode: number;
}
