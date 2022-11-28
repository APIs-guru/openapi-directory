import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class CreatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    pathParams: CreatePipelineVariableForWorkspacePathParams;
    request?: Map<string, any>;
}
export declare class CreatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
