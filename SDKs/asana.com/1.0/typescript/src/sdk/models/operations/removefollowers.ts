import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveFollowersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=goal_gid" })
  goalGid: string;
}


export class RemoveFollowersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveFollowersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskAddFollowersRequest;
}


export class RemoveFollowersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveFollowersPathParams;

  @Metadata()
  queryParams: RemoveFollowersQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveFollowersRequestBody;
}


export class RemoveFollowers201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.GoalResponse;
}


export class RemoveFollowersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeFollowers201ApplicationJsonObject?: RemoveFollowers201ApplicationJson;
}
