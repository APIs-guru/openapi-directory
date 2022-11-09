import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMessageReactionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=emoji" })
  emoji: string;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostMessageReactionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostMessageReactionsRequestBody;
}


export class PostMessageReactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageReactionEntity?: shared.MessageReactionEntity;

  @Metadata()
  statusCode: number;
}
