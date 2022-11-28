import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyPostGameCarnageReportEntry } from "./destinyhistoricalstatsdestinypostgamecarnagereportentry";
import { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry } from "./destinyhistoricalstatsdestinypostgamecarnagereportteamentry";
/**
 * Details about the activity.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails extends SpeakeasyBase {
    directorActivityHash?: number;
    instanceId?: number;
    isPrivate?: boolean;
    membershipType?: number;
    mode?: number;
    modes?: number[];
    referenceId?: number;
}
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportData extends SpeakeasyBase {
    activityDetails?: DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails;
    entries?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntry[];
    period?: Date;
    startingPhaseIndex?: number;
    teams?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry[];
}
