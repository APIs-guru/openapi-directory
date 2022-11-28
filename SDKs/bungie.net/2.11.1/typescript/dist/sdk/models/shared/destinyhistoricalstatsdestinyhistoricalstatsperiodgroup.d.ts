import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
/**
 * If the period group is for a specific activity, this property will be set.
**/
export declare class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails extends SpeakeasyBase {
    directorActivityHash?: number;
    instanceId?: number;
    isPrivate?: boolean;
    membershipType?: number;
    mode?: number;
    modes?: number[];
    referenceId?: number;
}
export declare class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup extends SpeakeasyBase {
    activityDetails?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails;
    period?: Date;
    values?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
