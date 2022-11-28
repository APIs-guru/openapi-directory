import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddSubgoalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class AddSubgoalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddSubgoalRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalAddSubgoalRequest;
}


export class AddSubgoal200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddSubgoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddSubgoalPathParams;

  @SpeakeasyMetadata()
  queryParams: AddSubgoalQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddSubgoalRequestBody;
}


export class AddSubgoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addSubgoal200ApplicationJsonObject?: AddSubgoal200ApplicationJson;
}
