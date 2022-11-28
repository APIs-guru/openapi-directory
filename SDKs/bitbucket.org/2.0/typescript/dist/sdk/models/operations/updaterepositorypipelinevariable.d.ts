import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineVariablePathParams extends SpeakeasyBase {
    repoSlug: string;
    variableUuid: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineVariableRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineVariablePathParams;
    request: Map<string, any>;
}
export declare class UpdateRepositoryPipelineVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
