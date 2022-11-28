import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteReportPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class DeleteReportRequest extends SpeakeasyBase {
    pathParams: DeleteReportPathParams;
}
export declare class DeleteReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
