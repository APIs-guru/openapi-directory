import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportMetadataSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReportMetadataRequest extends SpeakeasyBase {
    security: GetReportMetadataSecurity;
}
export declare class GetReportMetadataResponse extends SpeakeasyBase {
    contentType: string;
    reportMetadatas?: shared.ReportMetadatas;
    statusCode: number;
}
