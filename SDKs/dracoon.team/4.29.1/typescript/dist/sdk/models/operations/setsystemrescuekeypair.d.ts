import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetSystemRescueKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SetSystemRescueKeyPairRequest extends SpeakeasyBase {
    headers: SetSystemRescueKeyPairHeaders;
    request: shared.UserKeyPairContainer;
}
export declare class SetSystemRescueKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
