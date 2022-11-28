import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2ClanBanner } from "./groupsv2clanbanner";



// GroupsV2GroupV2ClanInfo
/** 
 * This contract contains clan-specific group information. It does not include any investment data.
**/
export class GroupsV2GroupV2ClanInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clanBannerData?: GroupsV2ClanBanner;

  @SpeakeasyMetadata()
  clanCallsign?: string;
}
