import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdmobAccountsNetworkReportGeneratePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdmobAccountsNetworkReportGenerateQueryParams extends SpeakeasyBase {
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
export declare class AdmobAccountsNetworkReportGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsNetworkReportGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsNetworkReportGenerateSecurity extends SpeakeasyBase {
    option1?: AdmobAccountsNetworkReportGenerateSecurityOption1;
    option2?: AdmobAccountsNetworkReportGenerateSecurityOption2;
}
export declare class AdmobAccountsNetworkReportGenerateRequest extends SpeakeasyBase {
    pathParams: AdmobAccountsNetworkReportGeneratePathParams;
    queryParams: AdmobAccountsNetworkReportGenerateQueryParams;
    request?: shared.GenerateNetworkReportRequest;
    security: AdmobAccountsNetworkReportGenerateSecurity;
}
export declare class AdmobAccountsNetworkReportGenerateResponse extends SpeakeasyBase {
    contentType: string;
    generateNetworkReportResponse?: shared.GenerateNetworkReportResponse;
    statusCode: number;
}
