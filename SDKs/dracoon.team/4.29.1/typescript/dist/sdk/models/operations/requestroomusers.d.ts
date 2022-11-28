import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomUsersPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestRoomUsersQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestRoomUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRoomUsersRequest extends SpeakeasyBase {
    pathParams: RequestRoomUsersPathParams;
    queryParams: RequestRoomUsersQueryParams;
    headers: RequestRoomUsersHeaders;
}
export declare class RequestRoomUsersResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roomUserList?: shared.RoomUserListOutput;
    statusCode: number;
}
