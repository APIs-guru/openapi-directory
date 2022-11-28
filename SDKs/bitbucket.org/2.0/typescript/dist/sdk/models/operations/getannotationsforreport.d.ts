import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationsForReportPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class GetAnnotationsForReportRequest extends SpeakeasyBase {
    pathParams: GetAnnotationsForReportPathParams;
}
export declare class GetAnnotationsForReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedAnnotations?: shared.PaginatedAnnotations;
}
