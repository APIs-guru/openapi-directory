import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetWorkflowPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    workflowId: any;
}
export declare class ActionsGetWorkflowRequest extends SpeakeasyBase {
    pathParams: ActionsGetWorkflowPathParams;
}
export declare class ActionsGetWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflow?: shared.Workflow;
}
