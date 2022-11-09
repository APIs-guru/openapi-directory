import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BranchRestrictionPolicyAppsOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @Metadata({ data: "json, name=hooks_url" })
  hooksUrl?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl?: string;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @Metadata({ data: "json, name=public_members_url" })
  publicMembersUrl?: string;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyAppsPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=issues" })
  issues?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=single_file" })
  singleFile?: string;
}


export class BranchRestrictionPolicyApps extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=external_url" })
  externalUrl?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: BranchRestrictionPolicyAppsOwner;

  @Metadata({ data: "json, name=permissions" })
  permissions?: BranchRestrictionPolicyAppsPermissions;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class BranchRestrictionPolicyRestrictionsAppsOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @Metadata({ data: "json, name=hooks_url" })
  hooksUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl?: string;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=public_members_url" })
  publicMembersUrl?: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyRestrictionsAppsPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=issues" })
  issues?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=single_file" })
  singleFile?: string;
}


export class BranchRestrictionPolicyRestrictionsApps extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=external_url" })
  externalUrl?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: BranchRestrictionPolicyRestrictionsAppsOwner;

  @Metadata({ data: "json, name=permissions" })
  permissions?: BranchRestrictionPolicyRestrictionsAppsPermissions;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class BranchRestrictionPolicyRestrictionsTeams extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: any;

  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: string;

  @Metadata({ data: "json, name=repositories_url" })
  repositoriesUrl?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyRestrictionsUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.BranchRestrictionPolicyRestrictionsApps })
  apps?: BranchRestrictionPolicyRestrictionsApps[];

  @Metadata({ data: "json, name=apps_url" })
  appsUrl?: string;

  @Metadata({ data: "json, name=teams", elemType: shared.BranchRestrictionPolicyRestrictionsTeams })
  teams?: BranchRestrictionPolicyRestrictionsTeams[];

  @Metadata({ data: "json, name=teams_url" })
  teamsUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=users", elemType: shared.BranchRestrictionPolicyRestrictionsUsers })
  users?: BranchRestrictionPolicyRestrictionsUsers[];

  @Metadata({ data: "json, name=users_url" })
  usersUrl?: string;
}


export class BranchRestrictionPolicyTeams extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: string;

  @Metadata({ data: "json, name=repositories_url" })
  repositoriesUrl?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// BranchRestrictionPolicy
/** 
 * Branch Restriction Policy
**/
export class BranchRestrictionPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.BranchRestrictionPolicyApps })
  apps: BranchRestrictionPolicyApps[];

  @Metadata({ data: "json, name=apps_url" })
  appsUrl: string;

  @Metadata({ data: "json, name=restrictions", elemType: shared.BranchRestrictionPolicyRestrictions })
  restrictions?: BranchRestrictionPolicyRestrictions[];

  @Metadata({ data: "json, name=teams", elemType: shared.BranchRestrictionPolicyTeams })
  teams: BranchRestrictionPolicyTeams[];

  @Metadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=users", elemType: shared.BranchRestrictionPolicyUsers })
  users: BranchRestrictionPolicyUsers[];

  @Metadata({ data: "json, name=users_url" })
  usersUrl: string;
}
