import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlayerUsageUsage extends SpeakeasyBase {
    firstDown?: number;
    overall?: number;
    pass?: number;
    passingDowns?: number;
    rush?: number;
    secondDown?: number;
    standardDowns?: number;
    thirdDown?: number;
}
export declare class PlayerUsage extends SpeakeasyBase {
    conference?: string;
    id?: number;
    name?: string;
    position?: string;
    season?: number;
    team?: string;
    usage?: PlayerUsageUsage;
}
