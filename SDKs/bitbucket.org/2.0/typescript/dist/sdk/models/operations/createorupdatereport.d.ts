import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrUpdateReportPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class CreateOrUpdateReportRequest extends SpeakeasyBase {
    pathParams: CreateOrUpdateReportPathParams;
    request: Map<string, any>;
}
export declare class CreateOrUpdateReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    report?: Map<string, any>;
}
