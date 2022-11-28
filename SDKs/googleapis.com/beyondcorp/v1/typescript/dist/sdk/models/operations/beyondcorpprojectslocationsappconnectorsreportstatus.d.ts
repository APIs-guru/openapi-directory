import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppConnectorsReportStatusPathParams extends SpeakeasyBase {
    appConnector: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsReportStatusQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppConnectorsReportStatusPathParams;
    queryParams: BeyondcorpProjectsLocationsAppConnectorsReportStatusQueryParams;
    request?: shared.GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest;
    security: BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
