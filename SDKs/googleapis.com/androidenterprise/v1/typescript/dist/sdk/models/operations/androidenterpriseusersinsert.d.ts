import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseUsersInsertPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseUsersInsertQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseUsersInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseUsersInsertRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseUsersInsertPathParams;
    queryParams: AndroidenterpriseUsersInsertQueryParams;
    request?: shared.User;
    security: AndroidenterpriseUsersInsertSecurity;
}
export declare class AndroidenterpriseUsersInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
