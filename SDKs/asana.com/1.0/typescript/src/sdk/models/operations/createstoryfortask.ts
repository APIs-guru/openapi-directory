import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStoryForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class CreateStoryForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateStoryForTaskRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.StoryRequestInput;
}


export class CreateStoryForTask201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.StoryResponse;
}


export class CreateStoryForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateStoryForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateStoryForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateStoryForTaskRequestBodyInput;
}


export class CreateStoryForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createStoryForTask201ApplicationJsonObject?: CreateStoryForTask201ApplicationJson;
}
