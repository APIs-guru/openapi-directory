import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateOpenIdLoginQueryParams extends SpeakeasyBase {
    issuer: string;
    language: string;
    redirectUri: string;
    test: boolean;
}
export declare class InitiateOpenIdLoginRequest extends SpeakeasyBase {
    queryParams: InitiateOpenIdLoginQueryParams;
}
export declare class InitiateOpenIdLoginResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
