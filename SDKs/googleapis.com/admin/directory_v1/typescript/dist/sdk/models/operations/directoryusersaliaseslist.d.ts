import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersAliasesListPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare enum DirectoryUsersAliasesListEventEnum {
    Add = "add",
    Delete = "delete"
}
export declare class DirectoryUsersAliasesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    event?: DirectoryUsersAliasesListEventEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryUsersAliasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesListSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersAliasesListSecurityOption1;
    option2?: DirectoryUsersAliasesListSecurityOption2;
    option3?: DirectoryUsersAliasesListSecurityOption3;
    option4?: DirectoryUsersAliasesListSecurityOption4;
}
export declare class DirectoryUsersAliasesListRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersAliasesListPathParams;
    queryParams: DirectoryUsersAliasesListQueryParams;
    security: DirectoryUsersAliasesListSecurity;
}
export declare class DirectoryUsersAliasesListResponse extends SpeakeasyBase {
    aliases?: shared.Aliases;
    contentType: string;
    statusCode: number;
}
