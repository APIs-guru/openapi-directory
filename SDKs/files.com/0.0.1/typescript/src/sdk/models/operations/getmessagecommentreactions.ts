import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessageCommentReactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message_comment_id" })
  messageCommentId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetMessageCommentReactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMessageCommentReactionsQueryParams;
}


export class GetMessageCommentReactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MessageCommentReactionEntity })
  messageCommentReactionEntities?: shared.MessageCommentReactionEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
