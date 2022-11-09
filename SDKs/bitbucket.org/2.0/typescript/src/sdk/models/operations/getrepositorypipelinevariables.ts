import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoryPipelineVariablesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineVariablesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineVariablesPathParams;
}


export class GetRepositoryPipelineVariablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
