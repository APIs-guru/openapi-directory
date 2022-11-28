import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRoomHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CreateRoomRequest extends SpeakeasyBase {
    headers: CreateRoomHeaders;
    request: shared.CreateRoomRequest;
}
export declare class CreateRoomResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
