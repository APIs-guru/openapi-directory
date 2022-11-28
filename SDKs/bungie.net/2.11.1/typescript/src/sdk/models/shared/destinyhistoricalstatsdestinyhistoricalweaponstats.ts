import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";



export class DestinyHistoricalStatsDestinyHistoricalWeaponStats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  referenceId?: number;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  values?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
