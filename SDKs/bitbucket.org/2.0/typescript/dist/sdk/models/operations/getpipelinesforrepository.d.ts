import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPipelinesForRepositoryPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetPipelinesForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetPipelinesForRepositoryPathParams;
}
export declare class GetPipelinesForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedPipelines?: shared.PaginatedPipelines;
}
