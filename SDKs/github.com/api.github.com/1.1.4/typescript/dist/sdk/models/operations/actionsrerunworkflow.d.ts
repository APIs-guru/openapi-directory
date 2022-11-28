import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsReRunWorkflowPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsReRunWorkflowRequest extends SpeakeasyBase {
    pathParams: ActionsReRunWorkflowPathParams;
}
export declare class ActionsReRunWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
