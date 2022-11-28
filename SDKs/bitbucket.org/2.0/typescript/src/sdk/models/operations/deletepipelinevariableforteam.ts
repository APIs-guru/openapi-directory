import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePipelineVariableForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;
}


export class DeletePipelineVariableForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePipelineVariableForTeamPathParams;
}


export class DeletePipelineVariableForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
