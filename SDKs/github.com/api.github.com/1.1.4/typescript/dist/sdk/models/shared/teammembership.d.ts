import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TeamMembershipRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
/**
 * Team Membership
**/
export declare class TeamMembership extends SpeakeasyBase {
    role: TeamMembershipRoleEnum;
    state: string;
    url: string;
}
