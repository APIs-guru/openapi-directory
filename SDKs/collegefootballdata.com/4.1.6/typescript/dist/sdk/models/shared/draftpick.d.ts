import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DraftPickHometownInfo extends SpeakeasyBase {
    city?: string;
    country?: string;
    countryFips?: number;
    latitude?: number;
    longitude?: number;
    state?: string;
}
export declare class DraftPick extends SpeakeasyBase {
    collegeAthleteId?: number;
    collegeConference?: string;
    collegeId?: number;
    collegeTeam?: string;
    height?: number;
    hometownInfo?: DraftPickHometownInfo;
    name?: string;
    nflAthleteId?: number;
    nflTeam?: string;
    overall?: number;
    pick?: number;
    position?: string;
    preDraftGrade?: number;
    preDraftPositionRanking?: number;
    preDraftRanking?: number;
    round?: number;
    weight?: number;
    year?: number;
}
