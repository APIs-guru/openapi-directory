import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForumPollResult } from "./forumpollresult";



export class ForumPollResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ForumPollResult })
  results?: ForumPollResult[];

  @SpeakeasyMetadata()
  topicId?: number;

  @SpeakeasyMetadata()
  totalVotes?: number;
}
