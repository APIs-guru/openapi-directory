import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsEnableWorkflowPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    workflowId: any;
}
export declare class ActionsEnableWorkflowRequest extends SpeakeasyBase {
    pathParams: ActionsEnableWorkflowPathParams;
}
export declare class ActionsEnableWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
