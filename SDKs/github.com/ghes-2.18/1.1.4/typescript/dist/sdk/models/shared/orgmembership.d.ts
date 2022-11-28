import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationSimple } from "./organizationsimple";
export declare class OrgMembershipPermissions extends SpeakeasyBase {
    canCreateRepository: boolean;
}
export declare enum OrgMembershipRoleEnum {
    Admin = "admin",
    Member = "member",
    BillingManager = "billing_manager"
}
export declare enum OrgMembershipStateEnum {
    Active = "active",
    Pending = "pending"
}
export declare class OrgMembershipSimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
/**
 * Org Membership
**/
export declare class OrgMembership extends SpeakeasyBase {
    organization: OrganizationSimple;
    organizationUrl: string;
    permissions?: OrgMembershipPermissions;
    role: OrgMembershipRoleEnum;
    state: OrgMembershipStateEnum;
    url: string;
    user: OrgMembershipSimpleUser;
}
