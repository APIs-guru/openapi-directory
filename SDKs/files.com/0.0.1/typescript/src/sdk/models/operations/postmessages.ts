import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMessagesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body: string;

  @Metadata({ data: "multipart_form, name=project_id" })
  projectId: number;

  @Metadata({ data: "multipart_form, name=subject" })
  subject: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostMessagesRequestBody;
}


export class PostMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageEntity?: shared.MessageEntity;

  @Metadata()
  statusCode: number;
}
