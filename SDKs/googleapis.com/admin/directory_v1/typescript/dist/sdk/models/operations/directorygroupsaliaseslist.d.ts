import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryGroupsAliasesListPathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryGroupsAliasesListQueryParams extends SpeakeasyBase {
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
export declare class DirectoryGroupsAliasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsAliasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsAliasesListSecurity extends SpeakeasyBase {
    option1?: DirectoryGroupsAliasesListSecurityOption1;
    option2?: DirectoryGroupsAliasesListSecurityOption2;
}
export declare class DirectoryGroupsAliasesListRequest extends SpeakeasyBase {
    pathParams: DirectoryGroupsAliasesListPathParams;
    queryParams: DirectoryGroupsAliasesListQueryParams;
    security: DirectoryGroupsAliasesListSecurity;
}
export declare class DirectoryGroupsAliasesListResponse extends SpeakeasyBase {
    aliases?: shared.Aliases;
    contentType: string;
    statusCode: number;
}
