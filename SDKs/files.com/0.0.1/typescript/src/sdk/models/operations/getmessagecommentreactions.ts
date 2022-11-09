import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessageCommentReactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message_comment_id" })
  messageCommentId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetMessageCommentReactionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMessageCommentReactionsQueryParams;
}


export class GetMessageCommentReactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MessageCommentReactionEntity })
  messageCommentReactionEntities?: shared.MessageCommentReactionEntity[];

  @Metadata()
  statusCode: number;
}
