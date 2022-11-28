import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddSupportingWorkForGoalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class AddSupportingWorkForGoalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddSupportingWorkForGoalRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalAddSupportingWorkRequest;
}


export class AddSupportingWorkForGoal200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddSupportingWorkForGoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddSupportingWorkForGoalPathParams;

  @SpeakeasyMetadata()
  queryParams: AddSupportingWorkForGoalQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddSupportingWorkForGoalRequestBody;
}


export class AddSupportingWorkForGoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addSupportingWorkForGoal200ApplicationJsonObject?: AddSupportingWorkForGoal200ApplicationJson;
}
