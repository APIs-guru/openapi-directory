import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDownloadJobLogsForWorkflowRunPathParams extends SpeakeasyBase {
    jobId: number;
    owner: string;
    repo: string;
}
export declare class ActionsDownloadJobLogsForWorkflowRunRequest extends SpeakeasyBase {
    pathParams: ActionsDownloadJobLogsForWorkflowRunPathParams;
}
export declare class ActionsDownloadJobLogsForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
