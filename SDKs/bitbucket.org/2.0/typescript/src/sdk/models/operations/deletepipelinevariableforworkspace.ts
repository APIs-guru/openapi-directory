import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeletePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePipelineVariableForWorkspacePathParams;
}


export class DeletePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
