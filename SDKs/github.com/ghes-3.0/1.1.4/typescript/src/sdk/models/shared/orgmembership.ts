import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationSimple } from "./organizationsimple";


export class OrgMembershipPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_create_repository" })
  canCreateRepository: boolean;
}

export enum OrgMembershipRoleEnum {
    Admin = "admin"
,    Member = "member"
,    BillingManager = "billing_manager"
}

export enum OrgMembershipStateEnum {
    Active = "active"
,    Pending = "pending"
}


export class OrgMembershipSimpleUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @Metadata({ data: "json, name=starred_at" })
  starredAt?: string;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// OrgMembership
/** 
 * Org Membership
**/
export class OrgMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization: OrganizationSimple;

  @Metadata({ data: "json, name=organization_url" })
  organizationUrl: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: OrgMembershipPermissions;

  @Metadata({ data: "json, name=role" })
  role: OrgMembershipRoleEnum;

  @Metadata({ data: "json, name=state" })
  state: OrgMembershipStateEnum;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user: OrgMembershipSimpleUser;
}
