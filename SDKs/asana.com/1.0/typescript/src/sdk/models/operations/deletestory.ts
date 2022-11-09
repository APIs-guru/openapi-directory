import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteStoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_gid" })
  storyGid: string;
}


export class DeleteStoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DeleteStoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStoryPathParams;

  @Metadata()
  queryParams: DeleteStoryQueryParams;
}


export class DeleteStory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class DeleteStoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteStory200ApplicationJsonObject?: DeleteStory200ApplicationJson;
}
