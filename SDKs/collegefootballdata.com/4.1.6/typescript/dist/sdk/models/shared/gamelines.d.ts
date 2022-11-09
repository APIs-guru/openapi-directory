import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GameLinesLines extends SpeakeasyBase {
    awayMoneyline?: number;
    formattedSpread?: string;
    homeMoneyline?: number;
    overUnder?: number;
    overUnderOpen?: number;
    provider?: string;
    spread?: number;
    spreadOpen?: number;
}
export declare class GameLines extends SpeakeasyBase {
    awayConference?: string;
    awayScore?: number;
    awayTeam?: string;
    homeConference?: string;
    homeScore?: number;
    homeTeam?: string;
    id?: number;
    lines?: GameLinesLines[];
    season?: number;
    seasonType?: string;
    week?: number;
}
