import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseUsersDeletePathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseUsersDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseUsersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseUsersDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseUsersDeletePathParams;
    queryParams: AndroidenterpriseUsersDeleteQueryParams;
    security: AndroidenterpriseUsersDeleteSecurity;
}
export declare class AndroidenterpriseUsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
