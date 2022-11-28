import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersPhotosUpdatePathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersPhotosUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersPhotosUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersPhotosUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersPhotosUpdatePathParams;
    queryParams: DirectoryUsersPhotosUpdateQueryParams;
    request?: shared.UserPhoto;
    security: DirectoryUsersPhotosUpdateSecurity;
}
export declare class DirectoryUsersPhotosUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userPhoto?: shared.UserPhoto;
}
