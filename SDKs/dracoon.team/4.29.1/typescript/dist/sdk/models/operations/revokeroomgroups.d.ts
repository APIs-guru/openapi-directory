import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeRoomGroupsPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RevokeRoomGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RevokeRoomGroupsRequest extends SpeakeasyBase {
    pathParams: RevokeRoomGroupsPathParams;
    headers: RevokeRoomGroupsHeaders;
    request: shared.RoomGroupsDeleteBatchRequest;
}
export declare class RevokeRoomGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
