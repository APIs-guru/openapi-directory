import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoryPipelineCachesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineCachesRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineCachesPathParams;
}
export declare class GetRepositoryPipelineCachesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedPipelineCaches?: shared.PaginatedPipelineCaches;
}
