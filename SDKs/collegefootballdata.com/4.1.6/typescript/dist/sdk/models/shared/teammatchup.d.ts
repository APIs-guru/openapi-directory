import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamMatchupGames extends SpeakeasyBase {
    awayScore?: number;
    awayTeam?: string;
    date?: string;
    homeScore?: number;
    homeTeam?: string;
    neutralSite?: boolean;
    season?: number;
    seasonType?: string;
    venue?: string;
    week?: number;
    winner?: string;
}
export declare class TeamMatchup extends SpeakeasyBase {
    endYear?: number;
    games?: TeamMatchupGames[];
    startYear?: number;
    team1?: string;
    team1Wins?: number;
    team2?: string;
    team2Wins?: number;
    ties?: number;
}
