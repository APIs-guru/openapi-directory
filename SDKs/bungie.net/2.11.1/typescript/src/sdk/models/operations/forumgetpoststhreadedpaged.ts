import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetPostsThreadedPagedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=getParentPost" })
  getParentPost: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageSize" })
  pageSize: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=parentPostId" })
  parentPostId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=replySize" })
  replySize: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rootThreadMode" })
  rootThreadMode: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sortMode" })
  sortMode: number;
}


export class ForumGetPostsThreadedPagedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostsThreadedPagedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetPostsThreadedPagedPathParams;

  @Metadata()
  queryParams: ForumGetPostsThreadedPagedQueryParams;
}


export class ForumGetPostsThreadedPagedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
