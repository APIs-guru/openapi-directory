import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseInstallsDeletePathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    installId: string;
    userId: string;
}
export declare class AndroidenterpriseInstallsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseInstallsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseInstallsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseInstallsDeletePathParams;
    queryParams: AndroidenterpriseInstallsDeleteQueryParams;
    security: AndroidenterpriseInstallsDeleteSecurity;
}
export declare class AndroidenterpriseInstallsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
