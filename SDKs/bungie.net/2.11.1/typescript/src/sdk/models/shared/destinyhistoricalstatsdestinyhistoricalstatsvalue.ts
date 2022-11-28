import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyHistoricalStatsDestinyHistoricalStatsValueBasic
/** 
 * Basic stat value.
**/
export class DestinyHistoricalStatsDestinyHistoricalStatsValueBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyHistoricalStatsValuePga
/** 
 * Per game average for the statistic, if applicable
**/
export class DestinyHistoricalStatsDestinyHistoricalStatsValuePga extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted
/** 
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export class DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


export class DestinyHistoricalStatsDestinyHistoricalStatsValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityId?: number;

  @SpeakeasyMetadata()
  basic?: DestinyHistoricalStatsDestinyHistoricalStatsValueBasic;

  @SpeakeasyMetadata()
  pga?: DestinyHistoricalStatsDestinyHistoricalStatsValuePga;

  @SpeakeasyMetadata()
  statId?: string;

  @SpeakeasyMetadata()
  weighted?: DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted;
}
