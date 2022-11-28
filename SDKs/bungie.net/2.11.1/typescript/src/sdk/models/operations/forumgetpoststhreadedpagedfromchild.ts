import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetPostsThreadedPagedFromChildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childPostId" })
  childPostId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replySize" })
  replySize: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rootThreadMode" })
  rootThreadMode: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sortMode" })
  sortMode: number;
}


export class ForumGetPostsThreadedPagedFromChildQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostsThreadedPagedFromChildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetPostsThreadedPagedFromChildPathParams;

  @SpeakeasyMetadata()
  queryParams: ForumGetPostsThreadedPagedFromChildQueryParams;
}


export class ForumGetPostsThreadedPagedFromChildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
