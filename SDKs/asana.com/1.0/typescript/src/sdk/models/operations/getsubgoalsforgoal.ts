import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubgoalsForGoalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class GetSubgoalsForGoalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetSubgoalsForGoal200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.GoalCompact })
  data?: shared.GoalCompact[];
}


export class GetSubgoalsForGoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubgoalsForGoalPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubgoalsForGoalQueryParams;
}


export class GetSubgoalsForGoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSubgoalsForGoal200ApplicationJsonObject?: GetSubgoalsForGoal200ApplicationJson;
}
