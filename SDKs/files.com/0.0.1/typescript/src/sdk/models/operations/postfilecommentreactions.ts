import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFileCommentReactionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=emoji" })
  emoji: string;

  @Metadata({ data: "multipart_form, name=file_comment_id" })
  fileCommentId: number;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostFileCommentReactionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostFileCommentReactionsRequestBody;
}


export class PostFileCommentReactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileCommentReactionEntity?: shared.FileCommentReactionEntity;

  @Metadata()
  statusCode: number;
}
