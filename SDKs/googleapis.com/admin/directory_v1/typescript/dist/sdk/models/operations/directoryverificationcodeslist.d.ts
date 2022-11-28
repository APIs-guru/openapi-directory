import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryVerificationCodesListPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryVerificationCodesListQueryParams extends SpeakeasyBase {
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
export declare class DirectoryVerificationCodesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryVerificationCodesListRequest extends SpeakeasyBase {
    pathParams: DirectoryVerificationCodesListPathParams;
    queryParams: DirectoryVerificationCodesListQueryParams;
    security: DirectoryVerificationCodesListSecurity;
}
export declare class DirectoryVerificationCodesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verificationCodes?: shared.VerificationCodes;
}
