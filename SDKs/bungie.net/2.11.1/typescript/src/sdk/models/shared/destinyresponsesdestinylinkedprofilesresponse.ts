import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyResponsesDestinyProfileUserInfoCard } from "./destinyresponsesdestinyprofileuserinfocard";
import { DestinyResponsesDestinyErrorProfile } from "./destinyresponsesdestinyerrorprofile";



// DestinyResponsesDestinyLinkedProfilesResponseBnetMembership
/** 
 * If the requested membership had a linked Bungie.Net membership ID, this is the basic information about that BNet account.
 * I know, Tetron; I know this is mixing UserServices concerns with DestinyServices concerns. But it's so damn convenient! https://www.youtube.com/watch?v=X5R-bB-gKVI
**/
export class DestinyResponsesDestinyLinkedProfilesResponseBnetMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicableMembershipTypes?: number[];

  @SpeakeasyMetadata()
  crossSaveOverride?: number;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  iconPath?: string;

  @SpeakeasyMetadata()
  isPublic?: boolean;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  supplementalDisplayName?: string;
}


// DestinyResponsesDestinyLinkedProfilesResponse
/** 
 * I know what you seek. You seek linked accounts. Found them, you have.
 * This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
**/
export class DestinyResponsesDestinyLinkedProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bnetMembership?: DestinyResponsesDestinyLinkedProfilesResponseBnetMembership;

  @SpeakeasyMetadata({ elemType: DestinyResponsesDestinyProfileUserInfoCard })
  profiles?: DestinyResponsesDestinyProfileUserInfoCard[];

  @SpeakeasyMetadata({ elemType: DestinyResponsesDestinyErrorProfile })
  profilesWithErrors?: DestinyResponsesDestinyErrorProfile[];
}
