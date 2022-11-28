import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDownloadWorkflowRunLogsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsDownloadWorkflowRunLogsRequest extends SpeakeasyBase {
    pathParams: ActionsDownloadWorkflowRunLogsPathParams;
}
export declare class ActionsDownloadWorkflowRunLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
