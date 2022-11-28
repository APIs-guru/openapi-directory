import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersAliasesInsertPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersAliasesInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersAliasesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesInsertSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersAliasesInsertSecurityOption1;
    option2?: DirectoryUsersAliasesInsertSecurityOption2;
}
export declare class DirectoryUsersAliasesInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersAliasesInsertPathParams;
    queryParams: DirectoryUsersAliasesInsertQueryParams;
    request?: shared.Alias;
    security: DirectoryUsersAliasesInsertSecurity;
}
export declare class DirectoryUsersAliasesInsertResponse extends SpeakeasyBase {
    alias?: shared.Alias;
    contentType: string;
    statusCode: number;
}
