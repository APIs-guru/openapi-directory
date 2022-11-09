import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMessageCommentReactionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=emoji" })
  emoji: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostMessageCommentReactionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostMessageCommentReactionsRequestBody;
}


export class PostMessageCommentReactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageCommentReactionEntity?: shared.MessageCommentReactionEntity;

  @Metadata()
  statusCode: number;
}
