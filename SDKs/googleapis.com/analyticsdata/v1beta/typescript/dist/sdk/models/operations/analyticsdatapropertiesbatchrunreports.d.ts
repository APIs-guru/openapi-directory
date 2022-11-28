import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsdataPropertiesBatchRunReportsPathParams extends SpeakeasyBase {
    property: string;
}
export declare class AnalyticsdataPropertiesBatchRunReportsQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsdataPropertiesBatchRunReportsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesBatchRunReportsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesBatchRunReportsSecurity extends SpeakeasyBase {
    option1?: AnalyticsdataPropertiesBatchRunReportsSecurityOption1;
    option2?: AnalyticsdataPropertiesBatchRunReportsSecurityOption2;
}
export declare class AnalyticsdataPropertiesBatchRunReportsRequest extends SpeakeasyBase {
    pathParams: AnalyticsdataPropertiesBatchRunReportsPathParams;
    queryParams: AnalyticsdataPropertiesBatchRunReportsQueryParams;
    request?: shared.BatchRunReportsRequest;
    security: AnalyticsdataPropertiesBatchRunReportsSecurity;
}
export declare class AnalyticsdataPropertiesBatchRunReportsResponse extends SpeakeasyBase {
    batchRunReportsResponse?: shared.BatchRunReportsResponse;
    contentType: string;
    statusCode: number;
}
