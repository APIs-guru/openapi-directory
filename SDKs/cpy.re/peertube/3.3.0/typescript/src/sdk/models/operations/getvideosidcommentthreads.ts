import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideosIdCommentThreadsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetVideosIdCommentThreadsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.CommentsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetVideosIdCommentThreadsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideosIdCommentThreadsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideosIdCommentThreadsQueryParams;
}


export class GetVideosIdCommentThreadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentThreadResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
