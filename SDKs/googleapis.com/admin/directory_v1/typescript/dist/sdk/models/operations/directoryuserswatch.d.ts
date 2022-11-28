import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DirectoryUsersWatchEventEnum {
    Add = "add",
    Delete = "delete",
    MakeAdmin = "makeAdmin",
    Undelete = "undelete",
    Update = "update"
}
export declare enum DirectoryUsersWatchOrderByEnum {
    Email = "email",
    FamilyName = "familyName",
    GivenName = "givenName"
}
export declare enum DirectoryUsersWatchProjectionEnum {
    Basic = "basic",
    Custom = "custom",
    Full = "full"
}
export declare enum DirectoryUsersWatchSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DirectoryUsersWatchViewTypeEnum {
    AdminView = "admin_view",
    DomainPublic = "domain_public"
}
export declare class DirectoryUsersWatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customFieldMask?: string;
    customer?: string;
    domain?: string;
    event?: DirectoryUsersWatchEventEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: DirectoryUsersWatchOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryUsersWatchProjectionEnum;
    query?: string;
    quotaUser?: string;
    showDeleted?: string;
    sortOrder?: DirectoryUsersWatchSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
    viewType?: DirectoryUsersWatchViewTypeEnum;
}
export declare class DirectoryUsersWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersWatchSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersWatchSecurityOption1;
    option2?: DirectoryUsersWatchSecurityOption2;
    option3?: DirectoryUsersWatchSecurityOption3;
}
export declare class DirectoryUsersWatchRequest extends SpeakeasyBase {
    queryParams: DirectoryUsersWatchQueryParams;
    request?: shared.Channel;
    security: DirectoryUsersWatchSecurity;
}
export declare class DirectoryUsersWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
