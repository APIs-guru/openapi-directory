import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetJobForWorkflowRunPathParams extends SpeakeasyBase {
    jobId: number;
    owner: string;
    repo: string;
}
export declare class ActionsGetJobForWorkflowRunRequest extends SpeakeasyBase {
    pathParams: ActionsGetJobForWorkflowRunPathParams;
}
export declare class ActionsGetJobForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    job?: shared.Job;
}
