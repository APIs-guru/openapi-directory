import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeletePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePipelineVariableForWorkspacePathParams;
}


export class DeletePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
