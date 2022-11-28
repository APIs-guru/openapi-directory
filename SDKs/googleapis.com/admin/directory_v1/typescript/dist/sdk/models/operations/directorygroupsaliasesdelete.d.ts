import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryGroupsAliasesDeletePathParams extends SpeakeasyBase {
    alias: string;
    groupKey: string;
}
export declare class DirectoryGroupsAliasesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryGroupsAliasesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsAliasesDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryGroupsAliasesDeletePathParams;
    queryParams: DirectoryGroupsAliasesDeleteQueryParams;
    security: DirectoryGroupsAliasesDeleteSecurity;
}
export declare class DirectoryGroupsAliasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
