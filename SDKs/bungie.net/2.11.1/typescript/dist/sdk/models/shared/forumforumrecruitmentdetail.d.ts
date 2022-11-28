import { SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
export declare class ForumForumRecruitmentDetail extends SpeakeasyBase {
    fireteam?: UserGeneralUser[];
    approved?: boolean;
    conversationId?: number;
    intensity?: number;
    kickedPlayerIds?: number[];
    microphoneRequired?: boolean;
    playerSlotsRemaining?: number;
    playerSlotsTotal?: number;
    tone?: number;
    topicId?: number;
}
