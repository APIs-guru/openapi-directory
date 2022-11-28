import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReviewsReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replyText" })
  replyText?: string;
}
