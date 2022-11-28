import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic
/** 
 * Basic stat value.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga
/** 
 * Per game average for the statistic, if applicable
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted
/** 
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore
/** 
 * Score earned by the team
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityId?: number;

  @SpeakeasyMetadata()
  basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic;

  @SpeakeasyMetadata()
  pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga;

  @SpeakeasyMetadata()
  statId?: string;

  @SpeakeasyMetadata()
  weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic
/** 
 * Basic stat value.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga
/** 
 * Per game average for the statistic, if applicable
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted
/** 
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding
/** 
 * Team's standing relative to other teams.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityId?: number;

  @SpeakeasyMetadata()
  basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic;

  @SpeakeasyMetadata()
  pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga;

  @SpeakeasyMetadata()
  statId?: string;

  @SpeakeasyMetadata()
  weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted;
}


export class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  score?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore;

  @SpeakeasyMetadata()
  standing?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding;

  @SpeakeasyMetadata()
  teamId?: number;

  @SpeakeasyMetadata()
  teamName?: string;
}
