import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoryPipelineVariablesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineVariablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoryPipelineVariablesPathParams;
}


export class GetRepositoryPipelineVariablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
