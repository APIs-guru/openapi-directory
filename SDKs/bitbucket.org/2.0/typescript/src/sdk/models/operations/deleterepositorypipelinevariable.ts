import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRepositoryPipelineVariablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryPipelineVariableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRepositoryPipelineVariablePathParams;
}


export class DeleteRepositoryPipelineVariableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
