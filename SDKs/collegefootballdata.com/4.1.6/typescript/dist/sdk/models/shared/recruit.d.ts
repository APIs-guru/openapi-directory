import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RecruitHometownInfo extends SpeakeasyBase {
    countyFips?: string;
    latitude?: number;
    longitude?: number;
}
export declare class Recruit extends SpeakeasyBase {
    athleteId?: number;
    city?: string;
    committedTo?: string;
    country?: string;
    height?: number;
    hometownInfo?: RecruitHometownInfo;
    id?: number;
    name?: string;
    position?: string;
    ranking?: number;
    rating?: number;
    recruitType?: string;
    school?: string;
    stars?: number;
    stateProvince?: string;
    weight?: number;
    year?: number;
}
