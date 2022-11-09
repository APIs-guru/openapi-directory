import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamMembershipRoleEnum {
    Member = "member"
,    Maintainer = "maintainer"
}


// TeamMembership
/** 
 * Team Membership
**/
export class TeamMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role: TeamMembershipRoleEnum;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
