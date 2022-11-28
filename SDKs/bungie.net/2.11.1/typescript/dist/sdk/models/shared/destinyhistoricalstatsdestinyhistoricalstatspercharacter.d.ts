import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsByPeriod } from "./destinyhistoricalstatsdestinyhistoricalstatsbyperiod";
export declare class DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter extends SpeakeasyBase {
    characterId?: number;
    deleted?: boolean;
    merged?: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod;
    results?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod>;
}
