import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPipelineVariableForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class GetPipelineVariableForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineVariableForTeamPathParams;
}


export class GetPipelineVariableForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineVariable?: Map<string, any>;
}
