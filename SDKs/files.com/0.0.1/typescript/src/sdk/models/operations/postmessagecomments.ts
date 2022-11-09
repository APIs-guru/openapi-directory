import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMessageCommentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostMessageCommentsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostMessageCommentsRequestBody;
}


export class PostMessageCommentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageCommentEntity?: shared.MessageCommentEntity;

  @Metadata()
  statusCode: number;
}
