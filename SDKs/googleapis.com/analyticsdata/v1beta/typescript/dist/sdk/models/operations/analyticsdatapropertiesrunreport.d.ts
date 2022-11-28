import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsdataPropertiesRunReportPathParams extends SpeakeasyBase {
    property: string;
}
export declare class AnalyticsdataPropertiesRunReportQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsdataPropertiesRunReportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesRunReportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesRunReportSecurity extends SpeakeasyBase {
    option1?: AnalyticsdataPropertiesRunReportSecurityOption1;
    option2?: AnalyticsdataPropertiesRunReportSecurityOption2;
}
export declare class AnalyticsdataPropertiesRunReportRequest extends SpeakeasyBase {
    pathParams: AnalyticsdataPropertiesRunReportPathParams;
    queryParams: AnalyticsdataPropertiesRunReportQueryParams;
    request?: shared.RunReportRequest;
    security: AnalyticsdataPropertiesRunReportSecurity;
}
export declare class AnalyticsdataPropertiesRunReportResponse extends SpeakeasyBase {
    contentType: string;
    runReportResponse?: shared.RunReportResponse;
    statusCode: number;
}
