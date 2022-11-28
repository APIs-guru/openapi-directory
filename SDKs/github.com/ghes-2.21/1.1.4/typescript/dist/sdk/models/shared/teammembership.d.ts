import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TeamMembershipRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare enum TeamMembershipStateEnum {
    Active = "active",
    Pending = "pending"
}
/**
 * Team Membership
**/
export declare class TeamMembership extends SpeakeasyBase {
    role: TeamMembershipRoleEnum;
    state: TeamMembershipStateEnum;
    url: string;
}
