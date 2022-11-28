import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsByPeriod } from "./destinyhistoricalstatsdestinyhistoricalstatsbyperiod";



export class DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterId?: number;

  @SpeakeasyMetadata()
  deleted?: boolean;

  @SpeakeasyMetadata()
  merged?: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod })
  results?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod>;
}
