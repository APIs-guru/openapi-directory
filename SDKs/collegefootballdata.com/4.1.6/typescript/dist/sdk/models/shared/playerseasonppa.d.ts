import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlayerSeasonPpaAveragePpa extends SpeakeasyBase {
    all?: number;
    firstDown?: number;
    pass?: number;
    passingDowns?: number;
    rush?: number;
    secondDown?: number;
    standardDowns?: number;
    thirdDown?: number;
}
export declare class PlayerSeasonPpaTotalPpa extends SpeakeasyBase {
    all?: number;
    firstDown?: number;
    pass?: number;
    passingDowns?: number;
    rush?: number;
    secondDown?: number;
    standardDowns?: number;
    thirdDown?: number;
}
export declare class PlayerSeasonPpa extends SpeakeasyBase {
    averagePpa?: PlayerSeasonPpaAveragePpa;
    conference?: string;
    id?: number;
    name?: string;
    position?: string;
    season?: number;
    team?: string;
    totalPpa?: PlayerSeasonPpaTotalPpa;
}
