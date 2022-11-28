import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPipelineStepForRepositoryPathParams extends SpeakeasyBase {
    pipelineUuid: string;
    repoSlug: string;
    stepUuid: string;
    workspace: string;
}
export declare class GetPipelineStepForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetPipelineStepForRepositoryPathParams;
}
export declare class GetPipelineStepForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineStep?: Map<string, any>;
}
