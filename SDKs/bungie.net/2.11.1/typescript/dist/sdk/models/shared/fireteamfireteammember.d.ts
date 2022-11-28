import { SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { FireteamFireteamUserInfoCard } from "./fireteamfireteamuserinfocard";
export declare class FireteamFireteamMember extends SpeakeasyBase {
    bungieNetUserInfo?: UserUserInfoCard;
    characterId?: number;
    dateJoined?: Date;
    destinyUserInfo?: FireteamFireteamUserInfoCard;
    hasMicrophone?: boolean;
    lastPlatformInviteAttemptDate?: Date;
    lastPlatformInviteAttemptResult?: number;
}
