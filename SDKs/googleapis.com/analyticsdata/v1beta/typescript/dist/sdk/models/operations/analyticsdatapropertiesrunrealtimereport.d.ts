import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsdataPropertiesRunRealtimeReportPathParams extends SpeakeasyBase {
    property: string;
}
export declare class AnalyticsdataPropertiesRunRealtimeReportQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsdataPropertiesRunRealtimeReportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesRunRealtimeReportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesRunRealtimeReportSecurity extends SpeakeasyBase {
    option1?: AnalyticsdataPropertiesRunRealtimeReportSecurityOption1;
    option2?: AnalyticsdataPropertiesRunRealtimeReportSecurityOption2;
}
export declare class AnalyticsdataPropertiesRunRealtimeReportRequest extends SpeakeasyBase {
    pathParams: AnalyticsdataPropertiesRunRealtimeReportPathParams;
    queryParams: AnalyticsdataPropertiesRunRealtimeReportQueryParams;
    request?: shared.RunRealtimeReportRequest;
    security: AnalyticsdataPropertiesRunRealtimeReportSecurity;
}
export declare class AnalyticsdataPropertiesRunRealtimeReportResponse extends SpeakeasyBase {
    contentType: string;
    runRealtimeReportResponse?: shared.RunRealtimeReportResponse;
    statusCode: number;
}
