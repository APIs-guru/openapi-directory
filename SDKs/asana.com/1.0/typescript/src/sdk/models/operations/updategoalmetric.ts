import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGoalMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class UpdateGoalMetricQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateGoalMetricRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalMetricCurrentValueRequest;
}


export class UpdateGoalMetricRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGoalMetricPathParams;

  @Metadata()
  queryParams: UpdateGoalMetricQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGoalMetricRequestBody;
}


export class UpdateGoalMetric200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class UpdateGoalMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGoalMetric200ApplicationJsonObject?: UpdateGoalMetric200ApplicationJson;
}
