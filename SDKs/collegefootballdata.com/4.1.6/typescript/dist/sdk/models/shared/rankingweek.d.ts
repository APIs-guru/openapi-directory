import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RankingWeekPollsRanks extends SpeakeasyBase {
    conference?: string;
    firstPlaceVotes?: number;
    points?: number;
    rank?: number;
    school?: string;
}
export declare class RankingWeekPolls extends SpeakeasyBase {
    poll?: string;
    ranks?: RankingWeekPollsRanks[];
}
export declare class RankingWeek extends SpeakeasyBase {
    polls?: RankingWeekPolls[];
    season?: number;
    seasonType?: string;
    week?: number;
}
