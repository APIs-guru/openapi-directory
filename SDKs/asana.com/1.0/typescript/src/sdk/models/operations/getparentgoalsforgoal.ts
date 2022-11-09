import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParentGoalsForGoalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class GetParentGoalsForGoalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetParentGoalsForGoalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetParentGoalsForGoalPathParams;

  @Metadata()
  queryParams: GetParentGoalsForGoalQueryParams;
}


export class GetParentGoalsForGoal200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.GoalCompact })
  data?: shared.GoalCompact[];
}


export class GetParentGoalsForGoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getParentGoalsForGoal200ApplicationJsonObject?: GetParentGoalsForGoal200ApplicationJson;
}
