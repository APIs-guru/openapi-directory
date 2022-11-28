import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";



// DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails
/** 
 * If the period group is for a specific activity, this property will be set.
**/
export class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  directorActivityHash?: number;

  @SpeakeasyMetadata()
  instanceId?: number;

  @SpeakeasyMetadata()
  isPrivate?: boolean;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  mode?: number;

  @SpeakeasyMetadata()
  modes?: number[];

  @SpeakeasyMetadata()
  referenceId?: number;
}


export class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityDetails?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails;

  @SpeakeasyMetadata()
  period?: Date;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  values?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
