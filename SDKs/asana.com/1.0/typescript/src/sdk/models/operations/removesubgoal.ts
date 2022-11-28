import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveSubgoalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class RemoveSubgoalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveSubgoalRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalRemoveSubgoalRequest;
}


export class RemoveSubgoal200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveSubgoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveSubgoalPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveSubgoalQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveSubgoalRequestBody;
}


export class RemoveSubgoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeSubgoal200ApplicationJsonObject?: RemoveSubgoal200ApplicationJson;
}
