import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetWorkflowUsagePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    workflowId: any;
}
export declare class ActionsGetWorkflowUsageRequest extends SpeakeasyBase {
    pathParams: ActionsGetWorkflowUsagePathParams;
}
export declare class ActionsGetWorkflowUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflowUsage?: shared.WorkflowUsage;
}
