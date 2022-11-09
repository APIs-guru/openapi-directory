import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveSupportingWorkForGoalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class RemoveSupportingWorkForGoalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveSupportingWorkForGoalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalAddSupportingWorkRequest;
}


export class RemoveSupportingWorkForGoalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveSupportingWorkForGoalPathParams;

  @Metadata()
  queryParams: RemoveSupportingWorkForGoalQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveSupportingWorkForGoalRequestBody;
}


export class RemoveSupportingWorkForGoal200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveSupportingWorkForGoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeSupportingWorkForGoal200ApplicationJsonObject?: RemoveSupportingWorkForGoal200ApplicationJson;
}
