import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseInstallsListPathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseInstallsListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseInstallsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseInstallsListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseInstallsListPathParams;
    queryParams: AndroidenterpriseInstallsListQueryParams;
    security: AndroidenterpriseInstallsListSecurity;
}
export declare class AndroidenterpriseInstallsListResponse extends SpeakeasyBase {
    contentType: string;
    installsListResponse?: shared.InstallsListResponse;
    statusCode: number;
}
