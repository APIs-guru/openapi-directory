import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";



export class UserUserMembershipData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bungieNetUser?: UserGeneralUser;

  @SpeakeasyMetadata({ elemType: GroupsV2GroupUserInfoCard })
  destinyMemberships?: GroupsV2GroupUserInfoCard[];

  @SpeakeasyMetadata()
  primaryMembershipId?: number;
}
