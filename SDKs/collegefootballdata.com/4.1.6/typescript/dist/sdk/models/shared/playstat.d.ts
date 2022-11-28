import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlayStatClock extends SpeakeasyBase {
    minutes?: number;
    seconds?: number;
}
export declare class PlayStat extends SpeakeasyBase {
    athleteId?: number;
    athleteName?: string;
    clock?: PlayStatClock;
    conference?: string;
    distance?: number;
    down?: number;
    driveId?: number;
    gameId?: number;
    opponent?: string;
    opponentScore?: number;
    period?: number;
    playId?: number;
    season?: number;
    stat?: number;
    statType?: string;
    team?: string;
    teamScore?: number;
    week?: number;
    yardsToGoal?: number;
}
