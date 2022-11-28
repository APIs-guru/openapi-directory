import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePipelineVariableForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class UpdatePipelineVariableForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePipelineVariableForTeamPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdatePipelineVariableForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineVariable?: Map<string, any>;
}
