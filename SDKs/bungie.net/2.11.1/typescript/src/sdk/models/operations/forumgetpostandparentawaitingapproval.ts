import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetPostAndParentAwaitingApprovalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=childPostId" })
  childPostId: number;
}


export class ForumGetPostAndParentAwaitingApprovalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostAndParentAwaitingApprovalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetPostAndParentAwaitingApprovalPathParams;

  @Metadata()
  queryParams: ForumGetPostAndParentAwaitingApprovalQueryParams;
}


export class ForumGetPostAndParentAwaitingApprovalResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
