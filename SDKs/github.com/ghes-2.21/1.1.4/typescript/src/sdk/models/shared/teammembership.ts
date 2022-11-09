import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamMembershipRoleEnum {
    Member = "member"
,    Maintainer = "maintainer"
}

export enum TeamMembershipStateEnum {
    Active = "active"
,    Pending = "pending"
}


// TeamMembership
/** 
 * Team Membership
**/
export class TeamMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role: TeamMembershipRoleEnum;

  @Metadata({ data: "json, name=state" })
  state: TeamMembershipStateEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
