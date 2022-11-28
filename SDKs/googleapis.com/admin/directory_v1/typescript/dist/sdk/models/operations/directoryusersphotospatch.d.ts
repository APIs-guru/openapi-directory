import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersPhotosPatchPathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersPhotosPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersPhotosPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersPhotosPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersPhotosPatchPathParams;
    queryParams: DirectoryUsersPhotosPatchQueryParams;
    request?: shared.UserPhoto;
    security: DirectoryUsersPhotosPatchSecurity;
}
export declare class DirectoryUsersPhotosPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userPhoto?: shared.UserPhoto;
}
