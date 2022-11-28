import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic stat value.
**/
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValueBasic extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Per game average for the statistic, if applicable
**/
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValuePga extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
export declare class DestinyHistoricalStatsDestinyHistoricalStatsValue extends SpeakeasyBase {
    activityId?: number;
    basic?: DestinyHistoricalStatsDestinyHistoricalStatsValueBasic;
    pga?: DestinyHistoricalStatsDestinyHistoricalStatsValuePga;
    statId?: string;
    weighted?: DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted;
}
