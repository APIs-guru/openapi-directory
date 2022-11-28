import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DirectoryGroupsListOrderByEnum {
    Email = "email"
}
export declare enum DirectoryGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DirectoryGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customer?: string;
    domain?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: DirectoryGroupsListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    sortOrder?: DirectoryGroupsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
    userKey?: string;
}
export declare class DirectoryGroupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryGroupsListSecurity extends SpeakeasyBase {
    option1?: DirectoryGroupsListSecurityOption1;
    option2?: DirectoryGroupsListSecurityOption2;
}
export declare class DirectoryGroupsListRequest extends SpeakeasyBase {
    queryParams: DirectoryGroupsListQueryParams;
    security: DirectoryGroupsListSecurity;
}
export declare class DirectoryGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Groups;
    statusCode: number;
}
