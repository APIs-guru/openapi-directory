import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPipelineVariableForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class GetPipelineVariableForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineVariableForTeamPathParams;
}


export class GetPipelineVariableForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineVariable?: Map<string, any>;
}
