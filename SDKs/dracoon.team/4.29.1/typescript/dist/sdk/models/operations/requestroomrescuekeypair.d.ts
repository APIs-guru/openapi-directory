import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomRescueKeyPairPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestRoomRescueKeyPairQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class RequestRoomRescueKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestRoomRescueKeyPairRequest extends SpeakeasyBase {
    pathParams: RequestRoomRescueKeyPairPathParams;
    queryParams: RequestRoomRescueKeyPairQueryParams;
    headers: RequestRoomRescueKeyPairHeaders;
}
export declare class RequestRoomRescueKeyPairResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userKeyPairContainer?: shared.UserKeyPairContainerOutput;
}
