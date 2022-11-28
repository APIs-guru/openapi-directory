import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeUserPasswordHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ChangeUserPasswordRequest extends SpeakeasyBase {
    headers: ChangeUserPasswordHeaders;
    request: shared.ChangeUserPasswordRequest;
}
export declare class ChangeUserPasswordResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    changeUserPassword400ApplicationJsonOneOf?: any;
}
