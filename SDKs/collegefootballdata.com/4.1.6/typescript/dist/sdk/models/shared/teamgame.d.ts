import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TeamGameTeamsStats extends SpeakeasyBase {
    category?: string;
    stat?: string;
}
export declare class TeamGameTeams extends SpeakeasyBase {
    conference?: string;
    homeAway?: boolean;
    points?: number;
    school?: string;
    stats?: TeamGameTeamsStats[];
}
export declare class TeamGame extends SpeakeasyBase {
    id?: number;
    teams?: TeamGameTeams[];
}
