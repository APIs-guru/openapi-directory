import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter } from "./destinyhistoricalstatsdestinyhistoricalstatspercharacter";
import { DestinyHistoricalStatsDestinyHistoricalStatsWithMerged } from "./destinyhistoricalstatsdestinyhistoricalstatswithmerged";



export class DestinyHistoricalStatsDestinyHistoricalStatsAccountResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter })
  characters?: DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter[];

  @SpeakeasyMetadata()
  mergedAllCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged;

  @SpeakeasyMetadata()
  mergedDeletedCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged;
}
