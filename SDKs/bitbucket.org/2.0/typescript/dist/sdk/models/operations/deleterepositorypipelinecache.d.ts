import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRepositoryPipelineCachePathParams extends SpeakeasyBase {
    cacheUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoryPipelineCacheRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryPipelineCachePathParams;
}
export declare class DeleteRepositoryPipelineCacheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
