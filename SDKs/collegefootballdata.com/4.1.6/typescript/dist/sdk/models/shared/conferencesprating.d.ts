import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ConferenceSpRatingDefenseHavoc extends SpeakeasyBase {
    db?: number;
    frontSeven?: number;
    total?: number;
}
export declare class ConferenceSpRatingDefense extends SpeakeasyBase {
    explosiveness?: number;
    havoc?: ConferenceSpRatingDefenseHavoc;
    pasing?: number;
    passingDowns?: number;
    rating?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class ConferenceSpRatingOffense extends SpeakeasyBase {
    explosiveness?: number;
    pace?: number;
    passing?: number;
    passingDowns?: number;
    rating?: number;
    runRate?: number;
    rushing?: number;
    standardDowns?: number;
    success?: number;
}
export declare class ConferenceSpRatingSpecialTeams extends SpeakeasyBase {
    rating?: number;
}
export declare class ConferenceSpRating extends SpeakeasyBase {
    conference?: string;
    defense?: ConferenceSpRatingDefense;
    offense?: ConferenceSpRatingOffense;
    rating?: number;
    secondOrderWins?: number;
    sos?: number;
    specialTeams?: ConferenceSpRatingSpecialTeams;
    year?: number;
}
