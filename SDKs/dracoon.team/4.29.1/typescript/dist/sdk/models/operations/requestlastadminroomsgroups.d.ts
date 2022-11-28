import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestLastAdminRoomsGroupsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class RequestLastAdminRoomsGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestLastAdminRoomsGroupsRequest extends SpeakeasyBase {
    pathParams: RequestLastAdminRoomsGroupsPathParams;
    headers: RequestLastAdminRoomsGroupsHeaders;
}
export declare class RequestLastAdminRoomsGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    lastAdminGroupRoomList?: shared.LastAdminGroupRoomList;
    statusCode: number;
}
