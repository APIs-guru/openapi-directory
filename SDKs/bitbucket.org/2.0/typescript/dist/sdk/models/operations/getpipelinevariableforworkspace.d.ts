import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPipelineVariableForWorkspacePathParams extends SpeakeasyBase {
    variableUuid: string;
    workspace: string;
}
export declare class GetPipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetPipelineVariableForWorkspacePathParams;
}
export declare class GetPipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
