import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteOpenIdLoginQueryParams extends SpeakeasyBase {
    code: string;
    idToken?: string;
    state: string;
}
export declare class CompleteOpenIdLoginRequest extends SpeakeasyBase {
    queryParams: CompleteOpenIdLoginQueryParams;
}
export declare class CompleteOpenIdLoginResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    loginResponse?: shared.LoginResponse;
    statusCode: number;
}
