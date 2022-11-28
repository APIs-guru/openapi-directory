import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDeleteWorkflowRunLogsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsDeleteWorkflowRunLogsRequest extends SpeakeasyBase {
    pathParams: ActionsDeleteWorkflowRunLogsPathParams;
}
export declare class ActionsDeleteWorkflowRunLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
