import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamSpRatingDefenseHavoc extends SpeakeasyBase {
    db?: number;
    frontSeven?: number;
    total?: number;
}
export declare class TeamSpRatingDefense extends SpeakeasyBase {
    explosiveness?: number;
    havoc?: TeamSpRatingDefenseHavoc;
    pasing?: number;
    passingDowns?: number;
    ranking?: number;
    rating?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class TeamSpRatingOffense extends SpeakeasyBase {
    explosiveness?: number;
    pace?: number;
    passing?: number;
    passingDowns?: number;
    ranking?: number;
    rating?: number;
    runRate?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class TeamSpRatingSpecialTeams extends SpeakeasyBase {
    rating?: number;
}
export declare class TeamSpRating extends SpeakeasyBase {
    conference?: string;
    defense?: TeamSpRatingDefense;
    offense?: TeamSpRatingOffense;
    ranking?: number;
    rating?: number;
    secondOrderWins?: number;
    sos?: number;
    specialTeams?: TeamSpRatingSpecialTeams;
    team?: string;
    year?: number;
}
