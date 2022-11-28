import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoomUsersPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class UpdateRoomUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateRoomUsersRequest extends SpeakeasyBase {
    pathParams: UpdateRoomUsersPathParams;
    headers: UpdateRoomUsersHeaders;
    request: shared.RoomUsersAddBatchRequest;
}
export declare class UpdateRoomUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
