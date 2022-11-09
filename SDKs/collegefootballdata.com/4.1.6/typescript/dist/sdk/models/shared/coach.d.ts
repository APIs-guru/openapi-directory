import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CoachSeasons extends SpeakeasyBase {
    games?: number;
    losses?: number;
    postseasonRank?: number;
    preseasonRank?: number;
    school?: string;
    spDefense?: number;
    spOffense?: number;
    spOverall?: number;
    srs?: number;
    ties?: number;
    wins?: number;
    year?: string;
}
export declare class Coach extends SpeakeasyBase {
    firstName?: string;
    lastName?: string;
    seasons?: CoachSeasons[];
}
