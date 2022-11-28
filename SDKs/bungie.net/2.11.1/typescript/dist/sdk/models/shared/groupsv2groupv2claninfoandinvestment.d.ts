import { SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2ClanBanner } from "./groupsv2clanbanner";
import { DestinyDestinyProgression } from "./destinydestinyprogression";
/**
 * The same as GroupV2ClanInfo, but includes any investment data.
**/
export declare class GroupsV2GroupV2ClanInfoAndInvestment extends SpeakeasyBase {
    clanBannerData?: GroupsV2ClanBanner;
    clanCallsign?: string;
    d2ClanProgressions?: Map<string, DestinyDestinyProgression>;
}
