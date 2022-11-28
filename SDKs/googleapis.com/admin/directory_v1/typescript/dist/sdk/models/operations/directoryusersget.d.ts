import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersGetPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare enum DirectoryUsersGetProjectionEnum {
    Basic = "basic",
    Custom = "custom",
    Full = "full"
}
export declare enum DirectoryUsersGetViewTypeEnum {
    AdminView = "admin_view",
    DomainPublic = "domain_public"
}
export declare class DirectoryUsersGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customFieldMask?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryUsersGetProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    viewType?: DirectoryUsersGetViewTypeEnum;
}
export declare class DirectoryUsersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersGetSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersGetSecurityOption1;
    option2?: DirectoryUsersGetSecurityOption2;
}
export declare class DirectoryUsersGetRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersGetPathParams;
    queryParams: DirectoryUsersGetQueryParams;
    security: DirectoryUsersGetSecurity;
}
export declare class DirectoryUsersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
