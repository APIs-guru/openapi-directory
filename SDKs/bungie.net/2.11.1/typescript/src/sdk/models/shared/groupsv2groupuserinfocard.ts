import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupsV2GroupUserInfoCard extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastSeenDisplayName?: string;

  @SpeakeasyMetadata()
  lastSeenDisplayNameType?: number;

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
