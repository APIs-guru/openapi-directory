import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGoalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_workspace_level" })
  isWorkspaceLevel?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=portfolio" })
  portfolio?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_periods" })
  timePeriods?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class GetGoals200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.GoalCompact })
  data?: shared.GoalCompact[];
}


export class GetGoalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGoalsQueryParams;
}


export class GetGoalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGoals200ApplicationJsonObject?: GetGoals200ApplicationJson;
}
