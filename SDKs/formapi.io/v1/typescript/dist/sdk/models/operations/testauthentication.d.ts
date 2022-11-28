import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestAuthenticationSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum TestAuthenticationAuthenticationSuccessResponseStatusEnum {
    Success = "success"
}
export declare class TestAuthenticationAuthenticationSuccessResponse extends SpeakeasyBase {
    status: TestAuthenticationAuthenticationSuccessResponseStatusEnum;
}
export declare class TestAuthenticationRequest extends SpeakeasyBase {
    security: TestAuthenticationSecurity;
}
export declare class TestAuthenticationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    authenticationSuccessResponse?: TestAuthenticationAuthenticationSuccessResponse;
}
