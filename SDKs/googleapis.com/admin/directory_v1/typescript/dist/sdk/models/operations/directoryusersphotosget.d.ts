import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersPhotosGetPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersPhotosGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersPhotosGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersPhotosGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersPhotosGetSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersPhotosGetSecurityOption1;
    option2?: DirectoryUsersPhotosGetSecurityOption2;
}
export declare class DirectoryUsersPhotosGetRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersPhotosGetPathParams;
    queryParams: DirectoryUsersPhotosGetQueryParams;
    security: DirectoryUsersPhotosGetSecurity;
}
export declare class DirectoryUsersPhotosGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userPhoto?: shared.UserPhoto;
}
