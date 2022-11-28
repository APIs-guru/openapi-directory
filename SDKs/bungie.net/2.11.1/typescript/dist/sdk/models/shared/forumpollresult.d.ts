import { SpeakeasyBase } from "../../../internal/utils";
export declare class ForumPollResult extends SpeakeasyBase {
    answerSlot?: number;
    answerText?: string;
    lastVoteDate?: Date;
    requestingUserVoted?: boolean;
    votes?: number;
}
