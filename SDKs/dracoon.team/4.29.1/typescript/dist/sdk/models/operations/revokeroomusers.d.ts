import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeRoomUsersPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RevokeRoomUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RevokeRoomUsersRequest extends SpeakeasyBase {
    pathParams: RevokeRoomUsersPathParams;
    headers: RevokeRoomUsersHeaders;
    request: shared.RoomUsersDeleteBatchRequest;
}
export declare class RevokeRoomUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
