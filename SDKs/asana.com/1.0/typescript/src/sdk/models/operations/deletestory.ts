import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteStoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_gid" })
  storyGid: string;
}


export class DeleteStoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DeleteStory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class DeleteStoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStoryPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteStoryQueryParams;
}


export class DeleteStoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteStory200ApplicationJsonObject?: DeleteStory200ApplicationJson;
}
