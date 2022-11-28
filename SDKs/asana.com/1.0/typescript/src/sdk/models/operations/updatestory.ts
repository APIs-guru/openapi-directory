import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateStoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_gid" })
  storyGid: string;
}


export class UpdateStoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateStoryRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.StoryRequestInput;
}


export class UpdateStory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.StoryResponse;
}


export class UpdateStoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateStoryPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateStoryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateStoryRequestBodyInput;
}


export class UpdateStoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateStory200ApplicationJsonObject?: UpdateStory200ApplicationJson;
}
