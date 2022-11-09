import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosIdCommentThreadsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetVideosIdCommentThreadsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.CommentsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetVideosIdCommentThreadsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosIdCommentThreadsPathParams;

  @Metadata()
  queryParams: GetVideosIdCommentThreadsQueryParams;
}


export class GetVideosIdCommentThreadsResponse extends SpeakeasyBase {
  @Metadata()
  commentThreadResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
