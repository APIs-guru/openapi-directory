import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryUsersUpdatePathParams extends SpeakeasyBase {
    userKey: string;
}
export declare class DirectoryUsersUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryUsersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryUsersUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryUsersUpdatePathParams;
    queryParams: DirectoryUsersUpdateQueryParams;
    request?: shared.UserInput;
    security: DirectoryUsersUpdateSecurity;
}
export declare class DirectoryUsersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
