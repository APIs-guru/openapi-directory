import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsdataPropertiesBatchRunPivotReportsPathParams extends SpeakeasyBase {
    property: string;
}
export declare class AnalyticsdataPropertiesBatchRunPivotReportsQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesBatchRunPivotReportsSecurity extends SpeakeasyBase {
    option1?: AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1;
    option2?: AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2;
}
export declare class AnalyticsdataPropertiesBatchRunPivotReportsRequest extends SpeakeasyBase {
    pathParams: AnalyticsdataPropertiesBatchRunPivotReportsPathParams;
    queryParams: AnalyticsdataPropertiesBatchRunPivotReportsQueryParams;
    request?: shared.BatchRunPivotReportsRequest;
    security: AnalyticsdataPropertiesBatchRunPivotReportsSecurity;
}
export declare class AnalyticsdataPropertiesBatchRunPivotReportsResponse extends SpeakeasyBase {
    batchRunPivotReportsResponse?: shared.BatchRunPivotReportsResponse;
    contentType: string;
    statusCode: number;
}
