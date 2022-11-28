import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportMetadataForReportTypePathParams extends SpeakeasyBase {
    reportType: string;
}
export declare class GetReportMetadataForReportTypeSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReportMetadataForReportTypeRequest extends SpeakeasyBase {
    pathParams: GetReportMetadataForReportTypePathParams;
    security: GetReportMetadataForReportTypeSecurity;
}
export declare class GetReportMetadataForReportTypeResponse extends SpeakeasyBase {
    contentType: string;
    reportMetadata?: shared.ReportMetadata;
    statusCode: number;
}
