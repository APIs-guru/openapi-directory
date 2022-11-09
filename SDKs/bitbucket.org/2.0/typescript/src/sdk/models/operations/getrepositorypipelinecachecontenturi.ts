import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoryPipelineCacheContentUriPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cache_uuid" })
  cacheUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineCacheContentUriRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineCacheContentUriPathParams;
}


export class GetRepositoryPipelineCacheContentUriResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineCacheContentUri?: shared.PipelineCacheContentUri;
}
