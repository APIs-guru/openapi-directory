import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetUserKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SetUserKeyPairRequest extends SpeakeasyBase {
    headers: SetUserKeyPairHeaders;
    request: shared.UserKeyPairContainer;
}
export declare class SetUserKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
