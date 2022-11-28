import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FireteamFireteamUserInfoCard extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fireteamDisplayName?: string;

  @SpeakeasyMetadata()
  fireteamMembershipType?: number;

  @SpeakeasyMetadata()
  fireteamPlatformProfileUrl?: string;

  @SpeakeasyMetadata()
  fireteamPlatformUniqueIdentifier?: string;

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
