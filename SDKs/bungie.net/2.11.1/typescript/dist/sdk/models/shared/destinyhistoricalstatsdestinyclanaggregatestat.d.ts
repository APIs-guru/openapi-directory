import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic stat value.
**/
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValueBasic extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Per game average for the statistic, if applicable
**/
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValuePga extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Value of the stat for this player
**/
export declare class DestinyHistoricalStatsDestinyClanAggregateStatValue extends SpeakeasyBase {
    activityId?: number;
    basic?: DestinyHistoricalStatsDestinyClanAggregateStatValueBasic;
    pga?: DestinyHistoricalStatsDestinyClanAggregateStatValuePga;
    statId?: string;
    weighted?: DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted;
}
export declare class DestinyHistoricalStatsDestinyClanAggregateStat extends SpeakeasyBase {
    mode?: number;
    statId?: string;
    value?: DestinyHistoricalStatsDestinyClanAggregateStatValue;
}
