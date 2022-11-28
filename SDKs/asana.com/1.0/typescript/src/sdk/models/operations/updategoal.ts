import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGoalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class UpdateGoalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateGoalRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalRequestInput;
}


export class UpdateGoal200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class UpdateGoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGoalPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateGoalQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGoalRequestBodyInput;
}


export class UpdateGoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGoal200ApplicationJsonObject?: UpdateGoal200ApplicationJson;
}
