import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class GetReportSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReportRequest extends SpeakeasyBase {
    pathParams: GetReportPathParams;
    security: GetReportSecurity;
}
export declare class GetReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
