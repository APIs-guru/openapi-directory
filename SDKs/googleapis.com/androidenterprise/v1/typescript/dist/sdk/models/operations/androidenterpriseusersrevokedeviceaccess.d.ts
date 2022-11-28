import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseUsersRevokeDeviceAccessPathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseUsersRevokeDeviceAccessQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseUsersRevokeDeviceAccessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseUsersRevokeDeviceAccessRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseUsersRevokeDeviceAccessPathParams;
    queryParams: AndroidenterpriseUsersRevokeDeviceAccessQueryParams;
    security: AndroidenterpriseUsersRevokeDeviceAccessSecurity;
}
export declare class AndroidenterpriseUsersRevokeDeviceAccessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
