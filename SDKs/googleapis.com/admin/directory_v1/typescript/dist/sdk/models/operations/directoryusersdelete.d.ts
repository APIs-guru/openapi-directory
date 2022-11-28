import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersDeletePathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersDeletePathParams;
    queryParams: DirectoryUsersDeleteQueryParams;
    security: DirectoryUsersDeleteSecurity;
}
export declare class DirectoryUsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
