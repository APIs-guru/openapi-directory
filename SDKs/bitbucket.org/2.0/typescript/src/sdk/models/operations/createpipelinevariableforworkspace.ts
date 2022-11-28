import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePipelineVariableForWorkspacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class CreatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
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
