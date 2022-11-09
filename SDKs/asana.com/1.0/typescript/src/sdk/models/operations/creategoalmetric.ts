import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGoalMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class CreateGoalMetricQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateGoalMetricRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalMetricRequest;
}


export class CreateGoalMetricRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateGoalMetricPathParams;

  @Metadata()
  queryParams: CreateGoalMetricQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateGoalMetricRequestBody;
}


export class CreateGoalMetric200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class CreateGoalMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGoalMetric200ApplicationJsonObject?: CreateGoalMetric200ApplicationJson;
}
