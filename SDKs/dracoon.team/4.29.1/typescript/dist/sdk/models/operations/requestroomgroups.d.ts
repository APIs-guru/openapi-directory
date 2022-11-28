import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomGroupsPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestRoomGroupsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestRoomGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRoomGroupsRequest extends SpeakeasyBase {
    pathParams: RequestRoomGroupsPathParams;
    queryParams: RequestRoomGroupsQueryParams;
    headers: RequestRoomGroupsHeaders;
}
export declare class RequestRoomGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roomGroupList?: shared.RoomGroupList;
    statusCode: number;
}
