import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPipelineVariablesForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetPipelineVariablesForTeamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetPipelineVariablesForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineVariablesForTeamPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPipelineVariablesForTeamQueryParams;
}


export class GetPipelineVariablesForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
