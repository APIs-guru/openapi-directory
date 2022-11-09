import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PlayerGamePpaAveragePpa extends SpeakeasyBase {
    all?: number;
    pass?: number;
    rush?: number;
}
export declare class PlayerGamePpa extends SpeakeasyBase {
    averagePpa?: PlayerGamePpaAveragePpa;
    name?: string;
    opponent?: string;
    position?: string;
    season?: number;
    team?: string;
    week?: number;
}
