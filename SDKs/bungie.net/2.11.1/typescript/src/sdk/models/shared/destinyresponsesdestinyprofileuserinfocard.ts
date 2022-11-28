import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";



// DestinyResponsesDestinyProfileUserInfoCardPlatformSilver
/** 
 * This is the silver available on this Profile across any platforms on which they have purchased silver.
 *  This is only available if you are requesting yourself.
**/
export class DestinyResponsesDestinyProfileUserInfoCardPlatformSilver extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesItemsDestinyItemComponent })
  platformSilver?: Map<string, DestinyEntitiesItemsDestinyItemComponent>;
}


export class DestinyResponsesDestinyProfileUserInfoCard extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicableMembershipTypes?: number[];

  @SpeakeasyMetadata()
  crossSaveOverride?: number;

  @SpeakeasyMetadata()
  dateLastPlayed?: Date;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  iconPath?: string;

  @SpeakeasyMetadata()
  isCrossSavePrimary?: boolean;

  @SpeakeasyMetadata()
  isOverridden?: boolean;

  @SpeakeasyMetadata()
  isPublic?: boolean;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  platformSilver?: DestinyResponsesDestinyProfileUserInfoCardPlatformSilver;

  @SpeakeasyMetadata()
  supplementalDisplayName?: string;

  @SpeakeasyMetadata()
  unpairedGameVersions?: number;
}
