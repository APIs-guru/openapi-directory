import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGoalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class UpdateGoalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateGoalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalRequest;
}


export class UpdateGoalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGoalPathParams;

  @Metadata()
  queryParams: UpdateGoalQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGoalRequestBody;
}


export class UpdateGoal200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class UpdateGoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGoal200ApplicationJsonObject?: UpdateGoal200ApplicationJson;
}
