import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoryPipelineCachesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineCachesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineCachesPathParams;
}


export class GetRepositoryPipelineCachesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedPipelineCaches?: shared.PaginatedPipelineCaches;
}
