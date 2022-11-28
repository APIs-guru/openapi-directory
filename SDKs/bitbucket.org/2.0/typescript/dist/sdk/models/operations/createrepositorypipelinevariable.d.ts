import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateRepositoryPipelineVariablePathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreateRepositoryPipelineVariableRequest extends SpeakeasyBase {
    pathParams: CreateRepositoryPipelineVariablePathParams;
    request: Map<string, any>;
}
export declare class CreateRepositoryPipelineVariableResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    pipelineVariable?: Map<string, any>;
}
