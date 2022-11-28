import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { FireteamFireteamUserInfoCard } from "./fireteamfireteamuserinfocard";



export class FireteamFireteamMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bungieNetUserInfo?: UserUserInfoCard;

  @SpeakeasyMetadata()
  characterId?: number;

  @SpeakeasyMetadata()
  dateJoined?: Date;

  @SpeakeasyMetadata()
  destinyUserInfo?: FireteamFireteamUserInfoCard;

  @SpeakeasyMetadata()
  hasMicrophone?: boolean;

  @SpeakeasyMetadata()
  lastPlatformInviteAttemptDate?: Date;

  @SpeakeasyMetadata()
  lastPlatformInviteAttemptResult?: number;
}
