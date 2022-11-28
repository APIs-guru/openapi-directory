import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
    variableUuid: string;
    workspace: string;
}
export declare class DeletePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    pathParams: DeletePipelineVariableForWorkspacePathParams;
}
export declare class DeletePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
