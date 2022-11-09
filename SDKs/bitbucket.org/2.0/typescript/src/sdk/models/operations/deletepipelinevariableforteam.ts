import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePipelineVariableForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class DeletePipelineVariableForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePipelineVariableForTeamPathParams;
}


export class DeletePipelineVariableForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
