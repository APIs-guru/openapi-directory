import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupsV2GroupFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capabilities?: number;

  @SpeakeasyMetadata()
  hostGuidedGamePermissionOverride?: number;

  @SpeakeasyMetadata()
  invitePermissionOverride?: boolean;

  @SpeakeasyMetadata()
  joinLevel?: number;

  @SpeakeasyMetadata()
  maximumMembers?: number;

  @SpeakeasyMetadata()
  maximumMembershipsOfGroupType?: number;

  @SpeakeasyMetadata()
  membershipTypes?: number[];

  @SpeakeasyMetadata()
  updateBannerPermissionOverride?: boolean;

  @SpeakeasyMetadata()
  updateCulturePermissionOverride?: boolean;
}
