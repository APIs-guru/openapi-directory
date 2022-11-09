import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPipelineVariableForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPipelineVariableForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineVariableForWorkspacePathParams;
}


export class GetPipelineVariableForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineVariable?: Map<string, any>;
}
