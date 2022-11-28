import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoryPipelineCacheContentUriPathParams extends SpeakeasyBase {
    cacheUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineCacheContentUriRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineCacheContentUriPathParams;
}
export declare class GetRepositoryPipelineCacheContentUriResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineCacheContentUri?: shared.PipelineCacheContentUri;
}
