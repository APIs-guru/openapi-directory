import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePipelineVariableForWorkspacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class CreatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineVariable?: Map<string, any>;
}
