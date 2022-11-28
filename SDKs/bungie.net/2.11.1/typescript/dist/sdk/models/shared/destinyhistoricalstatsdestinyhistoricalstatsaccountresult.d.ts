import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter } from "./destinyhistoricalstatsdestinyhistoricalstatspercharacter";
import { DestinyHistoricalStatsDestinyHistoricalStatsWithMerged } from "./destinyhistoricalstatsdestinyhistoricalstatswithmerged";
export declare class DestinyHistoricalStatsDestinyHistoricalStatsAccountResult extends SpeakeasyBase {
    characters?: DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter[];
    mergedAllCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged;
    mergedDeletedCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged;
}
