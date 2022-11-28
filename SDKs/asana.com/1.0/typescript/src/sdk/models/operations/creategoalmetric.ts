import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGoalMetricPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class CreateGoalMetricQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateGoalMetricRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalMetricRequestInput;
}


export class CreateGoalMetric200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class CreateGoalMetricRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateGoalMetricPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateGoalMetricQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGoalMetricRequestBodyInput;
}


export class CreateGoalMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGoalMetric200ApplicationJsonObject?: CreateGoalMetric200ApplicationJson;
}
