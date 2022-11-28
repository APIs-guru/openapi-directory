import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IssueEventDismissedReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismissal_commit_id" })
  dismissalCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=dismissal_message" })
  dismissalMessage: string;

  @SpeakeasyMetadata({ data: "json, name=review_id" })
  reviewId: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;
}
