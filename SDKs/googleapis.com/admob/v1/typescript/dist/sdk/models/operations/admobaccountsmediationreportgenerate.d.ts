import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdmobAccountsMediationReportGeneratePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdmobAccountsMediationReportGenerateQueryParams extends SpeakeasyBase {
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
export declare class AdmobAccountsMediationReportGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsMediationReportGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdmobAccountsMediationReportGenerateSecurity extends SpeakeasyBase {
    option1?: AdmobAccountsMediationReportGenerateSecurityOption1;
    option2?: AdmobAccountsMediationReportGenerateSecurityOption2;
}
export declare class AdmobAccountsMediationReportGenerateRequest extends SpeakeasyBase {
    pathParams: AdmobAccountsMediationReportGeneratePathParams;
    queryParams: AdmobAccountsMediationReportGenerateQueryParams;
    request?: shared.GenerateMediationReportRequest;
    security: AdmobAccountsMediationReportGenerateSecurity;
}
export declare class AdmobAccountsMediationReportGenerateResponse extends SpeakeasyBase {
    contentType: string;
    generateMediationReportResponse?: shared.GenerateMediationReportResponse;
    statusCode: number;
}
