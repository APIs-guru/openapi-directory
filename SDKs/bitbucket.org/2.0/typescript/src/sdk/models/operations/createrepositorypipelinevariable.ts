import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRepositoryPipelineVariablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateRepositoryPipelineVariableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateRepositoryPipelineVariablePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateRepositoryPipelineVariableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineVariable?: Map<string, any>;
}
