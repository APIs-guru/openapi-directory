import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoomPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class UpdateRoomHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateRoomRequest extends SpeakeasyBase {
    pathParams: UpdateRoomPathParams;
    headers: UpdateRoomHeaders;
    request: shared.UpdateRoomRequest;
}
export declare class UpdateRoomResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
