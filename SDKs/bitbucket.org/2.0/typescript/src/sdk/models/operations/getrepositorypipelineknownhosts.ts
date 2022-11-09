import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoryPipelineKnownHostsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineKnownHostsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineKnownHostsPathParams;
}


export class GetRepositoryPipelineKnownHostsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedPipelineKnownHosts?: shared.PaginatedPipelineKnownHosts;
}
