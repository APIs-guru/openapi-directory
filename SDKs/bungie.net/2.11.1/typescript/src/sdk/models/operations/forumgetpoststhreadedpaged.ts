import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetPostsThreadedPagedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=getParentPost" })
  getParentPost: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parentPostId" })
  parentPostId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replySize" })
  replySize: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rootThreadMode" })
  rootThreadMode: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sortMode" })
  sortMode: number;
}


export class ForumGetPostsThreadedPagedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostsThreadedPagedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetPostsThreadedPagedPathParams;

  @SpeakeasyMetadata()
  queryParams: ForumGetPostsThreadedPagedQueryParams;
}


export class ForumGetPostsThreadedPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
