import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMessagesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostMessagesRequestBody;
}


export class PostMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageEntity?: shared.MessageEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
