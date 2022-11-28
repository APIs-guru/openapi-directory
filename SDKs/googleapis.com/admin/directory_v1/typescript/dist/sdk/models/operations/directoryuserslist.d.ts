import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DirectoryUsersListEventEnum {
    Add = "add",
    Delete = "delete",
    MakeAdmin = "makeAdmin",
    Undelete = "undelete",
    Update = "update"
}
export declare enum DirectoryUsersListOrderByEnum {
    Email = "email",
    FamilyName = "familyName",
    GivenName = "givenName"
}
export declare enum DirectoryUsersListProjectionEnum {
    Basic = "basic",
    Custom = "custom",
    Full = "full"
}
export declare enum DirectoryUsersListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DirectoryUsersListViewTypeEnum {
    AdminView = "admin_view",
    DomainPublic = "domain_public"
}
export declare class DirectoryUsersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customFieldMask?: string;
    customer?: string;
    domain?: string;
    event?: DirectoryUsersListEventEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: DirectoryUsersListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryUsersListProjectionEnum;
    query?: string;
    quotaUser?: string;
    showDeleted?: string;
    sortOrder?: DirectoryUsersListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
    viewType?: DirectoryUsersListViewTypeEnum;
}
export declare class DirectoryUsersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersListSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersListSecurityOption1;
    option2?: DirectoryUsersListSecurityOption2;
    option3?: DirectoryUsersListSecurityOption3;
}
export declare class DirectoryUsersListRequest extends SpeakeasyBase {
    queryParams: DirectoryUsersListQueryParams;
    security: DirectoryUsersListSecurity;
}
export declare class DirectoryUsersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.Users;
}
