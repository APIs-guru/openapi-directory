import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseUsersUpdatePathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseUsersUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseUsersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseUsersUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseUsersUpdatePathParams;
    queryParams: AndroidenterpriseUsersUpdateQueryParams;
    request?: shared.User;
    security: AndroidenterpriseUsersUpdateSecurity;
}
export declare class AndroidenterpriseUsersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
