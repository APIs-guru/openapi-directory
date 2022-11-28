import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetParentGoalsForGoalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class GetParentGoalsForGoalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetParentGoalsForGoal200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.GoalCompact })
  data?: shared.GoalCompact[];
}


export class GetParentGoalsForGoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetParentGoalsForGoalPathParams;

  @SpeakeasyMetadata()
  queryParams: GetParentGoalsForGoalQueryParams;
}


export class GetParentGoalsForGoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getParentGoalsForGoal200ApplicationJsonObject?: GetParentGoalsForGoal200ApplicationJson;
}
