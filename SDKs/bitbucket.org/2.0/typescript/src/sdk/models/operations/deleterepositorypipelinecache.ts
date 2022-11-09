import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRepositoryPipelineCachePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cache_uuid" })
  cacheUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryPipelineCacheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoryPipelineCachePathParams;
}


export class DeleteRepositoryPipelineCacheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
