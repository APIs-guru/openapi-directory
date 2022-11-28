import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";



export class ReviewReplyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastEdited?: Timestamp;

  @SpeakeasyMetadata()
  replyText?: string;
}
