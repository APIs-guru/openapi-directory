import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetRoomRescueKeyPairPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class SetRoomRescueKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SetRoomRescueKeyPairRequest extends SpeakeasyBase {
    pathParams: SetRoomRescueKeyPairPathParams;
    headers: SetRoomRescueKeyPairHeaders;
    request: shared.UserKeyPairContainer;
}
export declare class SetRoomRescueKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
