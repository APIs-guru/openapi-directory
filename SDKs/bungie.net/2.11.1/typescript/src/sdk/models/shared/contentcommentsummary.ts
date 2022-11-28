import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentCommentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentCount?: number;

  @SpeakeasyMetadata()
  topicId?: number;
}
