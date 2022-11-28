import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyPostGameCarnageReportEntry } from "./destinyhistoricalstatsdestinypostgamecarnagereportentry";
import { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry } from "./destinyhistoricalstatsdestinypostgamecarnagereportteamentry";



// DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails
/** 
 * Details about the activity.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails extends SpeakeasyBase {
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


export class DestinyHistoricalStatsDestinyPostGameCarnageReportData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityDetails?: DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyPostGameCarnageReportEntry })
  entries?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntry[];

  @SpeakeasyMetadata()
  period?: Date;

  @SpeakeasyMetadata()
  startingPhaseIndex?: number;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry })
  teams?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry[];
}
