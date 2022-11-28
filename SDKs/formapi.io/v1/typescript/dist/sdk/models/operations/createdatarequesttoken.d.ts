import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDataRequestTokenPathParams extends SpeakeasyBase {
    dataRequestId: string;
}
export declare class CreateDataRequestTokenSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken extends SpeakeasyBase {
    dataRequestUrl: string;
    expiresAt: string;
    id: string;
    secret: string;
}
export declare class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse extends SpeakeasyBase {
    errors?: string[];
    status: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum;
    token: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken;
}
export declare class CreateDataRequestTokenRequest extends SpeakeasyBase {
    pathParams: CreateDataRequestTokenPathParams;
    security: CreateDataRequestTokenSecurity;
}
export declare class CreateDataRequestTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    createSubmissionDataRequestTokenResponse?: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse;
}
