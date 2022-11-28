import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveSupportingWorkForGoalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class RemoveSupportingWorkForGoalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveSupportingWorkForGoalRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalAddSupportingWorkRequest;
}


export class RemoveSupportingWorkForGoal200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveSupportingWorkForGoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveSupportingWorkForGoalPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveSupportingWorkForGoalQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveSupportingWorkForGoalRequestBody;
}


export class RemoveSupportingWorkForGoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeSupportingWorkForGoal200ApplicationJsonObject?: RemoveSupportingWorkForGoal200ApplicationJson;
}
