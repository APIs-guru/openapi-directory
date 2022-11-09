import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReviewsReplyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=replyText" })
  replyText?: string;
}
