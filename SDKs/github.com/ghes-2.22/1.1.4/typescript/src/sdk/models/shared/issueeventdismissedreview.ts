import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IssueEventDismissedReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismissal_commit_id" })
  dismissalCommitId?: string;

  @Metadata({ data: "json, name=dismissal_message" })
  dismissalMessage: string;

  @Metadata({ data: "json, name=review_id" })
  reviewId: number;

  @Metadata({ data: "json, name=state" })
  state: string;
}
