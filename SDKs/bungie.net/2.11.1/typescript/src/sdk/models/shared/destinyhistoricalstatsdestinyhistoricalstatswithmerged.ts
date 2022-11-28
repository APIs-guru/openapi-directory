import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsByPeriod } from "./destinyhistoricalstatsdestinyhistoricalstatsbyperiod";



export class DestinyHistoricalStatsDestinyHistoricalStatsWithMerged extends SpeakeasyBase {
  @SpeakeasyMetadata()
  merged?: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod })
  results?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod>;
}
