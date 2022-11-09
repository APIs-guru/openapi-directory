import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePipelineVariableForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class CreatePipelineVariableForTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class CreatePipelineVariableForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePipelineVariableForTeamPathParams;

  @Metadata()
  queryParams: CreatePipelineVariableForTeamQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class CreatePipelineVariableForTeamResponse extends SpeakeasyBase {
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
