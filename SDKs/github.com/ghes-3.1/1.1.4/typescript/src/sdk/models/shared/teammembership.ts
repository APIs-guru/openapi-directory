import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamMembershipRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}

export enum TeamMembershipStateEnum {
    Active = "active",
    Pending = "pending"
}


// TeamMembership
/** 
 * Team Membership
**/
export class TeamMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role: TeamMembershipRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: TeamMembershipStateEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
