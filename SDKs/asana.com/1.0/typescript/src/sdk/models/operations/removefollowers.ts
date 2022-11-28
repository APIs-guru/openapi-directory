import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveFollowersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class RemoveFollowersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveFollowersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskAddFollowersRequest;
}


export class RemoveFollowers201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class RemoveFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveFollowersPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveFollowersQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveFollowersRequestBody;
}


export class RemoveFollowersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeFollowers201ApplicationJsonObject?: RemoveFollowers201ApplicationJson;
}
