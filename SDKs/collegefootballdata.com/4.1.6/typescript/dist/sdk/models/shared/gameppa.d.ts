import { SpeakeasyBase } from "../../../internal/utils";
export declare class GamePpaDefense extends SpeakeasyBase {
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class GamePpaOffense extends SpeakeasyBase {
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class GamePpa extends SpeakeasyBase {
    conference?: string;
    defense?: GamePpaDefense;
    id?: number;
    offense?: GamePpaOffense;
    opponnent?: string;
    season?: number;
    team?: string;
    week?: number;
}
