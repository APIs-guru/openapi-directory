import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPipelineVariablesForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetPipelineVariablesForTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetPipelineVariablesForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineVariablesForTeamPathParams;

  @Metadata()
  queryParams: GetPipelineVariablesForTeamQueryParams;
}


export class GetPipelineVariablesForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
