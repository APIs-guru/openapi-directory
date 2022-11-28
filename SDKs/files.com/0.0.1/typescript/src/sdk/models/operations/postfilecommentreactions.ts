import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFileCommentReactionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=emoji" })
  emoji: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=file_comment_id" })
  fileCommentId: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostFileCommentReactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostFileCommentReactionsRequestBody;
}


export class PostFileCommentReactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileCommentReactionEntity?: shared.FileCommentReactionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
