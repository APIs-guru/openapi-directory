import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersPatchPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersPatchPathParams;
    queryParams: DirectoryUsersPatchQueryParams;
    request?: shared.UserInput;
    security: DirectoryUsersPatchSecurity;
}
export declare class DirectoryUsersPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
