import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PlayerGameTeamsCategoriesTypesAthletes extends SpeakeasyBase {
    id?: number;
    name?: string;
    stat?: string;
}
export declare class PlayerGameTeamsCategoriesTypes extends SpeakeasyBase {
    athletes?: PlayerGameTeamsCategoriesTypesAthletes[];
    name?: string;
}
export declare class PlayerGameTeamsCategories extends SpeakeasyBase {
    name?: string;
    types?: PlayerGameTeamsCategoriesTypes[];
}
export declare class PlayerGameTeamsSchool extends SpeakeasyBase {
    conference?: string;
    name?: string;
}
export declare class PlayerGameTeams extends SpeakeasyBase {
    categories?: PlayerGameTeamsCategories[];
    homeAway?: boolean;
    points?: number;
    school?: PlayerGameTeamsSchool;
}
export declare class PlayerGame extends SpeakeasyBase {
    id?: number;
    teams?: PlayerGameTeams[];
}
