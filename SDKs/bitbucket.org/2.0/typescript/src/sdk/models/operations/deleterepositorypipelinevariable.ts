import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRepositoryPipelineVariablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryPipelineVariableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoryPipelineVariablePathParams;
}


export class DeleteRepositoryPipelineVariableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
