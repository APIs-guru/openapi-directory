import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserHardLinkedUserMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  crossSaveOverriddenMembershipId?: number;

  @SpeakeasyMetadata()
  crossSaveOverriddenType?: number;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  membershipType?: number;
}
