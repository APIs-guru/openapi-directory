import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EncryptRoomPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class EncryptRoomHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class EncryptRoomRequest extends SpeakeasyBase {
    pathParams: EncryptRoomPathParams;
    headers: EncryptRoomHeaders;
    request: shared.EncryptRoomRequest;
}
export declare class EncryptRoomResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
