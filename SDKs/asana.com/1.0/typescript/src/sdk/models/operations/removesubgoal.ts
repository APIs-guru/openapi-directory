import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveSubgoalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class RemoveSubgoalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveSubgoalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalRemoveSubgoalRequest;
}


export class RemoveSubgoalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveSubgoalPathParams;

  @Metadata()
  queryParams: RemoveSubgoalQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveSubgoalRequestBody;
}


export class RemoveSubgoal200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveSubgoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeSubgoal200ApplicationJsonObject?: RemoveSubgoal200ApplicationJson;
}
