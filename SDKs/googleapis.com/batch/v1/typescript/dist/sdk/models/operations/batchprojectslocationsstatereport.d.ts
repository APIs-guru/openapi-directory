import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsStateReportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BatchProjectsLocationsStateReportQueryParams extends SpeakeasyBase {
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
export declare class BatchProjectsLocationsStateReportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsStateReportRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsStateReportPathParams;
    queryParams: BatchProjectsLocationsStateReportQueryParams;
    request?: shared.ReportAgentStateRequest;
    security: BatchProjectsLocationsStateReportSecurity;
}
export declare class BatchProjectsLocationsStateReportResponse extends SpeakeasyBase {
    contentType: string;
    reportAgentStateResponse?: shared.ReportAgentStateResponse;
    statusCode: number;
}
