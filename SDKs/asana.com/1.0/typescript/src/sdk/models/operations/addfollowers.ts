import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFollowersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class AddFollowersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddFollowersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskAddFollowersRequest;
}


export class AddFollowers201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class AddFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddFollowersPathParams;

  @SpeakeasyMetadata()
  queryParams: AddFollowersQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddFollowersRequestBody;
}


export class AddFollowersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addFollowers201ApplicationJsonObject?: AddFollowers201ApplicationJson;
}
