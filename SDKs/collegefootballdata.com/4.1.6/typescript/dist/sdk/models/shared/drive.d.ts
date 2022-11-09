import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DriveEndTime extends SpeakeasyBase {
    minutes?: number;
    seconds?: number;
}
export declare class DriveStartTime extends SpeakeasyBase {
    minutes?: number;
    seconds?: number;
}
export declare class Drive extends SpeakeasyBase {
    defense?: string;
    defenseConference?: string;
    driveNumber?: number;
    driveResult?: string;
    endDefenseScore?: number;
    endOffenseScore?: number;
    endPeriod?: number;
    endTime?: DriveEndTime;
    endYardline?: number;
    endYardsToGoal?: number;
    gameId?: number;
    id?: number;
    isHomeOffense?: boolean;
    offense?: string;
    offenseConference?: string;
    plays?: number;
    scoring?: boolean;
    startDefenseScore?: number;
    startOffenseScore?: number;
    startPeriod?: number;
    startTime?: DriveStartTime;
    startYardline?: number;
    startYardsToGoal?: number;
    yards?: number;
}
