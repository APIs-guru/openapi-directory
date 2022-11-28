import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomRescueKeyPathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class RequestRoomRescueKeyQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RequestRoomRescueKeyHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRoomRescueKeyRequest extends SpeakeasyBase {
    pathParams: RequestRoomRescueKeyPathParams;
    queryParams: RequestRoomRescueKeyQueryParams;
    headers: RequestRoomRescueKeyHeaders;
}
export declare class RequestRoomRescueKeyResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    fileKey?: shared.FileKey;
    statusCode: number;
}
