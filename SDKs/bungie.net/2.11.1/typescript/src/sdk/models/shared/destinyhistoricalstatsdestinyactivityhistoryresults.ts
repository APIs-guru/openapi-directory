import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from "./destinyhistoricalstatsdestinyhistoricalstatsperiodgroup";



export class DestinyHistoricalStatsDestinyActivityHistoryResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup })
  activities?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[];
}
