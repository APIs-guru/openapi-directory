import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrafficReportQueryParams extends SpeakeasyBase {
    dimension?: string;
    filter?: string;
    metric?: string;
    sort?: string;
}
export declare class GetTrafficReportSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetTrafficReportRequest extends SpeakeasyBase {
    queryParams: GetTrafficReportQueryParams;
    security: GetTrafficReportSecurity;
}
export declare class GetTrafficReportResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
