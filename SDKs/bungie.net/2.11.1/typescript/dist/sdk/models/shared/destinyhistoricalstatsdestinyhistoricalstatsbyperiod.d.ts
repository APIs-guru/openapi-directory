import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from "./destinyhistoricalstatsdestinyhistoricalstatsperiodgroup";
export declare class DestinyHistoricalStatsDestinyHistoricalStatsByPeriod extends SpeakeasyBase {
    allTime?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    allTimeTier1?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    allTimeTier2?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    allTimeTier3?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    daily?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[];
    monthly?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[];
}
