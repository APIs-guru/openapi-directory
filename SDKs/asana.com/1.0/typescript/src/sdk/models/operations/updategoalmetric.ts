import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGoalMetricPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class UpdateGoalMetricQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateGoalMetricRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalMetricCurrentValueRequestInput;
}


export class UpdateGoalMetric200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class UpdateGoalMetricRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGoalMetricPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateGoalMetricQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGoalMetricRequestBodyInput;
}


export class UpdateGoalMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateGoalMetric200ApplicationJsonObject?: UpdateGoalMetric200ApplicationJson;
}
