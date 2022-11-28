import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPipelineStepLogForRepositoryPathParams extends SpeakeasyBase {
    pipelineUuid: string;
    repoSlug: string;
    stepUuid: string;
    workspace: string;
}
export declare class GetPipelineStepLogForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetPipelineStepLogForRepositoryPathParams;
}
export declare class GetPipelineStepLogForRepositoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
