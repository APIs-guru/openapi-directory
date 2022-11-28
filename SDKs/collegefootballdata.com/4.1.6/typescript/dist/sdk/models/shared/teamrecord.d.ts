import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamRecordAwayGames extends SpeakeasyBase {
    games?: number;
    losses?: number;
    ties?: number;
    wins?: number;
}
export declare class TeamRecordConferenceGames extends SpeakeasyBase {
    games?: number;
    losses?: number;
    ties?: number;
    wins?: number;
}
export declare class TeamRecordHomeGames extends SpeakeasyBase {
    games?: number;
    losses?: number;
    ties?: number;
    wins?: number;
}
export declare class TeamRecordTotal extends SpeakeasyBase {
    games?: number;
    losses?: number;
    ties?: number;
    wins?: number;
}
export declare class TeamRecord extends SpeakeasyBase {
    awayGames?: TeamRecordAwayGames;
    conference?: string;
    conferenceGames?: TeamRecordConferenceGames;
    division?: string;
    homeGames?: TeamRecordHomeGames;
    team?: string;
    total?: TeamRecordTotal;
    year?: number;
}
