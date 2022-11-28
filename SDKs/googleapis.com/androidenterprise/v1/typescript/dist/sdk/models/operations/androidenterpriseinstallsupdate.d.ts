import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseInstallsUpdatePathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    installId: string;
    userId: string;
}
export declare class AndroidenterpriseInstallsUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseInstallsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseInstallsUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseInstallsUpdatePathParams;
    queryParams: AndroidenterpriseInstallsUpdateQueryParams;
    request?: shared.Install;
    security: AndroidenterpriseInstallsUpdateSecurity;
}
export declare class AndroidenterpriseInstallsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    install?: shared.Install;
    statusCode: number;
}
