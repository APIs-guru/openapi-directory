import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PlayClock extends SpeakeasyBase {
    minutes?: number;
    seconds?: number;
}
export declare class Play extends SpeakeasyBase {
    away?: string;
    clock?: PlayClock;
    defense?: string;
    defenseConference?: string;
    defenseScore?: number;
    defenseTimeouts?: number;
    distance?: number;
    down?: number;
    driveId?: number;
    driveNumber?: number;
    gameId?: number;
    home?: string;
    id?: number;
    offense?: string;
    offenseConference?: string;
    offenseScore?: number;
    offenseTimeouts?: number;
    period?: number;
    playNumber?: number;
    playText?: string;
    playType?: string;
    ppa?: number;
    scoring?: boolean;
    wallclock?: string;
    yardLine?: number;
    yardsGained?: number;
    yardsToGoal?: number;
}
