import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoomGroupsPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class UpdateRoomGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateRoomGroupsRequest extends SpeakeasyBase {
    pathParams: UpdateRoomGroupsPathParams;
    headers: UpdateRoomGroupsHeaders;
    request: shared.RoomGroupsAddBatchRequest;
}
export declare class UpdateRoomGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
