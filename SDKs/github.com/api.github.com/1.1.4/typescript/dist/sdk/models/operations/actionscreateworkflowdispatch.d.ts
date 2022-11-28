import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsCreateWorkflowDispatchPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    workflowId: any;
}
export declare class ActionsCreateWorkflowDispatchRequestBody extends SpeakeasyBase {
    inputs?: Map<string, string>;
    ref: string;
}
export declare class ActionsCreateWorkflowDispatchRequest extends SpeakeasyBase {
    pathParams: ActionsCreateWorkflowDispatchPathParams;
    request?: ActionsCreateWorkflowDispatchRequestBody;
}
export declare class ActionsCreateWorkflowDispatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
