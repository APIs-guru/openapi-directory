import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGoalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_workspace_level" })
  isWorkspaceLevel?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=portfolio" })
  portfolio?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time_periods" })
  timePeriods?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class GetGoalsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGoalsQueryParams;
}


export class GetGoals200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.GoalCompact })
  data?: shared.GoalCompact[];
}


export class GetGoalsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGoals200ApplicationJsonObject?: GetGoals200ApplicationJson;
}
