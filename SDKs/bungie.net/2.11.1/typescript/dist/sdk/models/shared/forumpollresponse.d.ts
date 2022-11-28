import { SpeakeasyBase } from "../../../internal/utils";
import { ForumPollResult } from "./forumpollresult";
export declare class ForumPollResponse extends SpeakeasyBase {
    results?: ForumPollResult[];
    topicId?: number;
    totalVotes?: number;
}
