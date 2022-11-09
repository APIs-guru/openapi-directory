import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubgoalsForGoalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class GetSubgoalsForGoalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetSubgoalsForGoalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubgoalsForGoalPathParams;

  @Metadata()
  queryParams: GetSubgoalsForGoalQueryParams;
}


export class GetSubgoalsForGoal200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.GoalCompact })
  data?: shared.GoalCompact[];
}


export class GetSubgoalsForGoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSubgoalsForGoal200ApplicationJsonObject?: GetSubgoalsForGoal200ApplicationJson;
}
