import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePipelineVariableForWorkspacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineVariable?: Map<string, any>;
}
