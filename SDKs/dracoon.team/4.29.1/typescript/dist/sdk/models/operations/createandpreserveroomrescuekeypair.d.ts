import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAndPreserveRoomRescueKeyPairPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class CreateAndPreserveRoomRescueKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateAndPreserveRoomRescueKeyPairRequest extends SpeakeasyBase {
    pathParams: CreateAndPreserveRoomRescueKeyPairPathParams;
    headers: CreateAndPreserveRoomRescueKeyPairHeaders;
    request: shared.CreateKeyPairRequest;
}
export declare class CreateAndPreserveRoomRescueKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
