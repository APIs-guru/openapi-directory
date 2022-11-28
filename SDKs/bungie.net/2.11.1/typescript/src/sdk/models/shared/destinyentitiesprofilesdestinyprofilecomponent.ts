import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyEntitiesProfilesDestinyProfileComponentUserInfo
/** 
 * If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
**/
export class DestinyEntitiesProfilesDestinyProfileComponentUserInfo extends SpeakeasyBase {
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


// DestinyEntitiesProfilesDestinyProfileComponent
/** 
 * The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
**/
export class DestinyEntitiesProfilesDestinyProfileComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterIds?: number[];

  @SpeakeasyMetadata()
  currentSeasonHash?: number;

  @SpeakeasyMetadata()
  currentSeasonRewardPowerCap?: number;

  @SpeakeasyMetadata()
  dateLastPlayed?: Date;

  @SpeakeasyMetadata()
  seasonHashes?: number[];

  @SpeakeasyMetadata()
  userInfo?: DestinyEntitiesProfilesDestinyProfileComponentUserInfo;

  @SpeakeasyMetadata()
  versionsOwned?: number;
}
