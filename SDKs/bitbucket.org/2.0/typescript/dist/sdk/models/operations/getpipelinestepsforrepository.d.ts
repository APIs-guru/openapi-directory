import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPipelineStepsForRepositoryPathParams extends SpeakeasyBase {
    pipelineUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetPipelineStepsForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetPipelineStepsForRepositoryPathParams;
}
export declare class GetPipelineStepsForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedPipelineSteps?: shared.PaginatedPipelineSteps;
}
