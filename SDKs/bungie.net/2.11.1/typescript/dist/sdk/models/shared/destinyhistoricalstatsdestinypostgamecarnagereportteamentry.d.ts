import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic stat value.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Per game average for the statistic, if applicable
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Score earned by the team
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore extends SpeakeasyBase {
    activityId?: number;
    basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic;
    pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga;
    statId?: string;
    weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted;
}
/**
 * Basic stat value.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Per game average for the statistic, if applicable
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Team's standing relative to other teams.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding extends SpeakeasyBase {
    activityId?: number;
    basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic;
    pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga;
    statId?: string;
    weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted;
}
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry extends SpeakeasyBase {
    score?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore;
    standing?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding;
    teamId?: number;
    teamName?: string;
}
