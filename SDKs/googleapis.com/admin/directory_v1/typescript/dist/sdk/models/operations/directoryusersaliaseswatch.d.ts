import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersAliasesWatchPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare enum DirectoryUsersAliasesWatchEventEnum {
    Add = "add",
    Delete = "delete"
}
export declare class DirectoryUsersAliasesWatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    event?: DirectoryUsersAliasesWatchEventEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryUsersAliasesWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesWatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersAliasesWatchSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersAliasesWatchSecurityOption1;
    option2?: DirectoryUsersAliasesWatchSecurityOption2;
    option3?: DirectoryUsersAliasesWatchSecurityOption3;
    option4?: DirectoryUsersAliasesWatchSecurityOption4;
}
export declare class DirectoryUsersAliasesWatchRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersAliasesWatchPathParams;
    queryParams: DirectoryUsersAliasesWatchQueryParams;
    request?: shared.Channel;
    security: DirectoryUsersAliasesWatchSecurity;
}
export declare class DirectoryUsersAliasesWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
