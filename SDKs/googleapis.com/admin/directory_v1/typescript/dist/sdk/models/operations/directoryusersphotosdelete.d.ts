import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersPhotosDeletePathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersPhotosDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersPhotosDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersPhotosDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersPhotosDeletePathParams;
    queryParams: DirectoryUsersPhotosDeleteQueryParams;
    security: DirectoryUsersPhotosDeleteSecurity;
}
export declare class DirectoryUsersPhotosDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
