import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddFollowersForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddFollowersForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddFollowersForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskAddFollowersRequest;
}


export class AddFollowersForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddFollowersForTaskPathParams;

  @Metadata()
  queryParams: AddFollowersForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddFollowersForTaskRequestBody;
}


export class AddFollowersForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddFollowersForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addFollowersForTask200ApplicationJsonObject?: AddFollowersForTask200ApplicationJson;
}
