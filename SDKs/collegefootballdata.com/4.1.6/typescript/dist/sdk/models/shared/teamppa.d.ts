import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TeamPpaDefenseCumulative extends SpeakeasyBase {
    passing?: number;
    rushing?: number;
    total?: number;
}
export declare class TeamPpaDefense extends SpeakeasyBase {
    cumulative?: TeamPpaDefenseCumulative;
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class TeamPpaOffenseCumulative extends SpeakeasyBase {
    passing?: number;
    rushing?: number;
    total?: number;
}
export declare class TeamPpaOffense extends SpeakeasyBase {
    cumulative?: TeamPpaOffenseCumulative;
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class TeamPpa extends SpeakeasyBase {
    conference?: string;
    defense?: TeamPpaDefense;
    offense?: TeamPpaOffense;
    season?: number;
    team?: string;
}
