import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomRescueKeyPairsPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestRoomRescueKeyPairsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestRoomRescueKeyPairsRequest extends SpeakeasyBase {
    pathParams: RequestRoomRescueKeyPairsPathParams;
    headers: RequestRoomRescueKeyPairsHeaders;
}
export declare class RequestRoomRescueKeyPairsResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userKeyPairContainers?: shared.UserKeyPairContainerOutput[];
}
