import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2ClanBanner } from "./groupsv2clanbanner";
import { DestinyDestinyProgression } from "./destinydestinyprogression";



// GroupsV2GroupV2ClanInfoAndInvestment
/** 
 * The same as GroupV2ClanInfo, but includes any investment data.
**/
export class GroupsV2GroupV2ClanInfoAndInvestment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clanBannerData?: GroupsV2ClanBanner;

  @SpeakeasyMetadata()
  clanCallsign?: string;

  @SpeakeasyMetadata({ elemType: DestinyDestinyProgression })
  d2ClanProgressions?: Map<string, DestinyDestinyProgression>;
}
