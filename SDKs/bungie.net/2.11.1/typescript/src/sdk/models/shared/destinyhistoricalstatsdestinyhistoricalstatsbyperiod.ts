import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from "./destinyhistoricalstatsdestinyhistoricalstatsperiodgroup";



export class DestinyHistoricalStatsDestinyHistoricalStatsByPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  allTime?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  allTimeTier1?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  allTimeTier2?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  allTimeTier3?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup })
  daily?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[];

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup })
  monthly?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[];
}
