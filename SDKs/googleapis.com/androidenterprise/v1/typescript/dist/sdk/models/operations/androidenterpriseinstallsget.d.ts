import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseInstallsGetPathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    installId: string;
    userId: string;
}
export declare class AndroidenterpriseInstallsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseInstallsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseInstallsGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseInstallsGetPathParams;
    queryParams: AndroidenterpriseInstallsGetQueryParams;
    security: AndroidenterpriseInstallsGetSecurity;
}
export declare class AndroidenterpriseInstallsGetResponse extends SpeakeasyBase {
    contentType: string;
    install?: shared.Install;
    statusCode: number;
}
