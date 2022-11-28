import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
    variableUuid: string;
    workspace: string;
}
export declare class UpdatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineVariableForWorkspacePathParams;
    request: Map<string, any>;
}
export declare class UpdatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
