import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveRoomRescueKeyPairPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RemoveRoomRescueKeyPairQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RemoveRoomRescueKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveRoomRescueKeyPairRequest extends SpeakeasyBase {
    pathParams: RemoveRoomRescueKeyPairPathParams;
    queryParams: RemoveRoomRescueKeyPairQueryParams;
    headers: RemoveRoomRescueKeyPairHeaders;
}
export declare class RemoveRoomRescueKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
