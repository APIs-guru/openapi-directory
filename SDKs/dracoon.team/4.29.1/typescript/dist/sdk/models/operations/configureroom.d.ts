import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureRoomPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class ConfigureRoomHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class ConfigureRoomRequest extends SpeakeasyBase {
    pathParams: ConfigureRoomPathParams;
    headers: ConfigureRoomHeaders;
    request: shared.ConfigRoomRequest;
}
export declare class ConfigureRoomResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
