import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryTwoStepVerificationTurnOffPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryTwoStepVerificationTurnOffQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryTwoStepVerificationTurnOffSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryTwoStepVerificationTurnOffRequest extends SpeakeasyBase {
    pathParams: DirectoryTwoStepVerificationTurnOffPathParams;
    queryParams: DirectoryTwoStepVerificationTurnOffQueryParams;
    security: DirectoryTwoStepVerificationTurnOffSecurity;
}
export declare class DirectoryTwoStepVerificationTurnOffResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
