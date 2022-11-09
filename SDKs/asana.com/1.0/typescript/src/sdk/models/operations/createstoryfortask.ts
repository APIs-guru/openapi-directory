import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateStoryForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class CreateStoryForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateStoryForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.StoryRequest;
}


export class CreateStoryForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateStoryForTaskPathParams;

  @Metadata()
  queryParams: CreateStoryForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateStoryForTaskRequestBody;
}


export class CreateStoryForTask201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.StoryResponse;
}


export class CreateStoryForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createStoryForTask201ApplicationJsonObject?: CreateStoryForTask201ApplicationJson;
}
