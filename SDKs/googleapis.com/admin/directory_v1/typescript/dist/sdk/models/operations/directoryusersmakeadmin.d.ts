import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersMakeAdminPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersMakeAdminQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersMakeAdminSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersMakeAdminRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersMakeAdminPathParams;
    queryParams: DirectoryUsersMakeAdminQueryParams;
    request?: shared.UserMakeAdmin;
    security: DirectoryUsersMakeAdminSecurity;
}
export declare class DirectoryUsersMakeAdminResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
