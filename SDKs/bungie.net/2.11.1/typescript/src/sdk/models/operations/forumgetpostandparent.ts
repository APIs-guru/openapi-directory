import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetPostAndParentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childPostId" })
  childPostId: number;
}


export class ForumGetPostAndParentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostAndParentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetPostAndParentPathParams;

  @SpeakeasyMetadata()
  queryParams: ForumGetPostAndParentQueryParams;
}


export class ForumGetPostAndParentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
