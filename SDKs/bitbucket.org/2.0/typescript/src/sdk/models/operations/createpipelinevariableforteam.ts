import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePipelineVariableForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class CreatePipelineVariableForTeamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class CreatePipelineVariableForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePipelineVariableForTeamPathParams;

  @SpeakeasyMetadata()
  queryParams: CreatePipelineVariableForTeamQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class CreatePipelineVariableForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineVariable?: Map<string, any>;
}
