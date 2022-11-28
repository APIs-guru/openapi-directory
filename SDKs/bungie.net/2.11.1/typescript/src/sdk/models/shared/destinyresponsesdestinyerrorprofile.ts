import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyResponsesDestinyErrorProfileInfoCard
/** 
 * Basic info about the account that failed. Don't expect anything other than membership ID, Membership Type, and displayName to be populated.
**/
export class DestinyResponsesDestinyErrorProfileInfoCard extends SpeakeasyBase {
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


// DestinyResponsesDestinyErrorProfile
/** 
 * If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account, this will contain as much info as we can get about the profile for your use.
 * Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
**/
export class DestinyResponsesDestinyErrorProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errorCode?: number;

  @SpeakeasyMetadata()
  infoCard?: DestinyResponsesDestinyErrorProfileInfoCard;
}
