import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyAggregateActivityStats } from "./destinyhistoricalstatsdestinyaggregateactivitystats";



export class DestinyHistoricalStatsDestinyAggregateActivityResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyAggregateActivityStats })
  activities?: DestinyHistoricalStatsDestinyAggregateActivityStats[];
}
