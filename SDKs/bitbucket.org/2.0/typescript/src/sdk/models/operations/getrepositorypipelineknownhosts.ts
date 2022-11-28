import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoryPipelineKnownHostsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineKnownHostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoryPipelineKnownHostsPathParams;
}


export class GetRepositoryPipelineKnownHostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  paginatedPipelineKnownHosts?: shared.PaginatedPipelineKnownHosts;
}
