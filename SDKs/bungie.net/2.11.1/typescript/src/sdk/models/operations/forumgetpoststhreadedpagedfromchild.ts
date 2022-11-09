import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetPostsThreadedPagedFromChildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=childPostId" })
  childPostId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageSize" })
  pageSize: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=replySize" })
  replySize: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rootThreadMode" })
  rootThreadMode: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sortMode" })
  sortMode: number;
}


export class ForumGetPostsThreadedPagedFromChildQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostsThreadedPagedFromChildRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetPostsThreadedPagedFromChildPathParams;

  @Metadata()
  queryParams: ForumGetPostsThreadedPagedFromChildQueryParams;
}


export class ForumGetPostsThreadedPagedFromChildResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
