import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewReplyResult } from "./reviewreplyresult";



export class ReviewsReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  result?: ReviewReplyResult;
}
