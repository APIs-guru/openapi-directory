import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumPollResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  answerSlot?: number;

  @SpeakeasyMetadata()
  answerText?: string;

  @SpeakeasyMetadata()
  lastVoteDate?: Date;

  @SpeakeasyMetadata()
  requestingUserVoted?: boolean;

  @SpeakeasyMetadata()
  votes?: number;
}
