import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateStoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_gid" })
  storyGid: string;
}


export class UpdateStoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateStoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.StoryRequest;
}


export class UpdateStoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateStoryPathParams;

  @Metadata()
  queryParams: UpdateStoryQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateStoryRequestBody;
}


export class UpdateStory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.StoryResponse;
}


export class UpdateStoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateStory200ApplicationJsonObject?: UpdateStory200ApplicationJson;
}
