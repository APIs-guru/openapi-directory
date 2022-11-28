import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMessageCommentReactionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=emoji" })
  emoji: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostMessageCommentReactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostMessageCommentReactionsRequestBody;
}


export class PostMessageCommentReactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCommentReactionEntity?: shared.MessageCommentReactionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
