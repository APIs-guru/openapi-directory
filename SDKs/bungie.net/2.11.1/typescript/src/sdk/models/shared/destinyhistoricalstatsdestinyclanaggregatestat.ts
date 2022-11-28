import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyHistoricalStatsDestinyClanAggregateStatValueBasic
/** 
 * Basic stat value.
**/
export class DestinyHistoricalStatsDestinyClanAggregateStatValueBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyClanAggregateStatValuePga
/** 
 * Per game average for the statistic, if applicable
**/
export class DestinyHistoricalStatsDestinyClanAggregateStatValuePga extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted
/** 
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export class DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyClanAggregateStatValue
/** 
 * Value of the stat for this player
**/
export class DestinyHistoricalStatsDestinyClanAggregateStatValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityId?: number;

  @SpeakeasyMetadata()
  basic?: DestinyHistoricalStatsDestinyClanAggregateStatValueBasic;

  @SpeakeasyMetadata()
  pga?: DestinyHistoricalStatsDestinyClanAggregateStatValuePga;

  @SpeakeasyMetadata()
  statId?: string;

  @SpeakeasyMetadata()
  weighted?: DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted;
}


export class DestinyHistoricalStatsDestinyClanAggregateStat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  mode?: number;

  @SpeakeasyMetadata()
  statId?: string;

  @SpeakeasyMetadata()
  value?: DestinyHistoricalStatsDestinyClanAggregateStatValue;
}
