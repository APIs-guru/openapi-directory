import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddSupportingWorkForGoalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class AddSupportingWorkForGoalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddSupportingWorkForGoalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalAddSupportingWorkRequest;
}


export class AddSupportingWorkForGoalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddSupportingWorkForGoalPathParams;

  @Metadata()
  queryParams: AddSupportingWorkForGoalQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddSupportingWorkForGoalRequestBody;
}


export class AddSupportingWorkForGoal200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddSupportingWorkForGoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addSupportingWorkForGoal200ApplicationJsonObject?: AddSupportingWorkForGoal200ApplicationJson;
}
