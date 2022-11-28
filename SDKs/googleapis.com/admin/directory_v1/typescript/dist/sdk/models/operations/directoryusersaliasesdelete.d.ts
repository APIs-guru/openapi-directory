import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersAliasesDeletePathParams extends SpeakeasyBase {
    alias: string;
    userKey: string;
}
export declare class DirectoryUsersAliasesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersAliasesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesDeleteSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersAliasesDeleteSecurityOption1;
    option2?: DirectoryUsersAliasesDeleteSecurityOption2;
}
export declare class DirectoryUsersAliasesDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersAliasesDeletePathParams;
    queryParams: DirectoryUsersAliasesDeleteQueryParams;
    security: DirectoryUsersAliasesDeleteSecurity;
}
export declare class DirectoryUsersAliasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
