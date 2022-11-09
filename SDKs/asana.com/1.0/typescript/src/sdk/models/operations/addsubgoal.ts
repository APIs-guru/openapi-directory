import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddSubgoalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class AddSubgoalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddSubgoalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalAddSubgoalRequest;
}


export class AddSubgoalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddSubgoalPathParams;

  @Metadata()
  queryParams: AddSubgoalQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddSubgoalRequestBody;
}


export class AddSubgoal200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddSubgoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addSubgoal200ApplicationJsonObject?: AddSubgoal200ApplicationJson;
}
