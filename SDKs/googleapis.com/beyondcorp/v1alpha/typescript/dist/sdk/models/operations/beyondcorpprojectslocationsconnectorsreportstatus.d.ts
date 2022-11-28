import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectorsReportStatusPathParams extends SpeakeasyBase {
    connector: string;
}
export declare class BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsConnectorsReportStatusSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectorsReportStatusRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectorsReportStatusPathParams;
    queryParams: BeyondcorpProjectsLocationsConnectorsReportStatusQueryParams;
    request?: shared.ReportStatusRequest;
    security: BeyondcorpProjectsLocationsConnectorsReportStatusSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectorsReportStatusResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
