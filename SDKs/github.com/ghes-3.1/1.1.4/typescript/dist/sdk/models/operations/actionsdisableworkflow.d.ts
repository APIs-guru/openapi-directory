import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDisableWorkflowPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    workflowId: any;
}
export declare class ActionsDisableWorkflowRequest extends SpeakeasyBase {
    pathParams: ActionsDisableWorkflowPathParams;
}
export declare class ActionsDisableWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
