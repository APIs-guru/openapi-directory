import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyActivitiesDestinyPublicActivityStatus } from "./destinyactivitiesdestinypublicactivitystatus";



export class TrendingTrendingEntryDestinyActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  status?: DestinyActivitiesDestinyPublicActivityStatus;
}
