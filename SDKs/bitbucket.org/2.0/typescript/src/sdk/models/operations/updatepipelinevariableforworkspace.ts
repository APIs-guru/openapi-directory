import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePipelineVariableForWorkspacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineVariable?: Map<string, any>;
}
