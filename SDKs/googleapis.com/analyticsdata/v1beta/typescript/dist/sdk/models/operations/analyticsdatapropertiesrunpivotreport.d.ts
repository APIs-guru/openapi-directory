import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsdataPropertiesRunPivotReportPathParams extends SpeakeasyBase {
    property: string;
}
export declare class AnalyticsdataPropertiesRunPivotReportQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsdataPropertiesRunPivotReportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesRunPivotReportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesRunPivotReportSecurity extends SpeakeasyBase {
    option1?: AnalyticsdataPropertiesRunPivotReportSecurityOption1;
    option2?: AnalyticsdataPropertiesRunPivotReportSecurityOption2;
}
export declare class AnalyticsdataPropertiesRunPivotReportRequest extends SpeakeasyBase {
    pathParams: AnalyticsdataPropertiesRunPivotReportPathParams;
    queryParams: AnalyticsdataPropertiesRunPivotReportQueryParams;
    request?: shared.RunPivotReportRequest;
    security: AnalyticsdataPropertiesRunPivotReportSecurity;
}
export declare class AnalyticsdataPropertiesRunPivotReportResponse extends SpeakeasyBase {
    contentType: string;
    runPivotReportResponse?: shared.RunPivotReportResponse;
    statusCode: number;
}
