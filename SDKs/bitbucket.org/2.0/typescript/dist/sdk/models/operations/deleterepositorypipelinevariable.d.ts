import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRepositoryPipelineVariablePathParams extends SpeakeasyBase {
    repoSlug: string;
    variableUuid: string;
    workspace: string;
}
export declare class DeleteRepositoryPipelineVariableRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryPipelineVariablePathParams;
}
export declare class DeleteRepositoryPipelineVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
