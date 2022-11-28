import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";



export class ForumForumRecruitmentDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UserGeneralUser })
  fireteam?: UserGeneralUser[];

  @SpeakeasyMetadata()
  approved?: boolean;

  @SpeakeasyMetadata()
  conversationId?: number;

  @SpeakeasyMetadata()
  intensity?: number;

  @SpeakeasyMetadata()
  kickedPlayerIds?: number[];

  @SpeakeasyMetadata()
  microphoneRequired?: boolean;

  @SpeakeasyMetadata()
  playerSlotsRemaining?: number;

  @SpeakeasyMetadata()
  playerSlotsTotal?: number;

  @SpeakeasyMetadata()
  tone?: number;

  @SpeakeasyMetadata()
  topicId?: number;
}
