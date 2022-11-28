import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetPostAndParentAwaitingApprovalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childPostId" })
  childPostId: number;
}


export class ForumGetPostAndParentAwaitingApprovalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostAndParentAwaitingApprovalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetPostAndParentAwaitingApprovalPathParams;

  @SpeakeasyMetadata()
  queryParams: ForumGetPostAndParentAwaitingApprovalQueryParams;
}


export class ForumGetPostAndParentAwaitingApprovalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
