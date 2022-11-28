import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryGroupsAliasesInsertPathParams extends SpeakeasyBase {
    groupKey: string;
}
export declare class DirectoryGroupsAliasesInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryGroupsAliasesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsAliasesInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryGroupsAliasesInsertPathParams;
    queryParams: DirectoryGroupsAliasesInsertQueryParams;
    request?: shared.Alias;
    security: DirectoryGroupsAliasesInsertSecurity;
}
export declare class DirectoryGroupsAliasesInsertResponse extends SpeakeasyBase {
    alias?: shared.Alias;
    contentType: string;
    statusCode: number;
}
