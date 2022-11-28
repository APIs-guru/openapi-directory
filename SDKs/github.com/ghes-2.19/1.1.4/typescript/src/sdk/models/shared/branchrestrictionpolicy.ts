import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BranchRestrictionPolicyAppsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=hooks_url" })
  hooksUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=issues_url" })
  issuesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=public_members_url" })
  publicMembersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyAppsPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=single_file" })
  singleFile?: string;
}


export class BranchRestrictionPolicyApps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=external_url" })
  externalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: BranchRestrictionPolicyAppsOwner;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: BranchRestrictionPolicyAppsPermissions;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class BranchRestrictionPolicyRestrictionsAppsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hooks_url" })
  hooksUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=issues_url" })
  issuesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=public_members_url" })
  publicMembersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyRestrictionsAppsPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=single_file" })
  singleFile?: string;
}


export class BranchRestrictionPolicyRestrictionsApps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=external_url" })
  externalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: BranchRestrictionPolicyRestrictionsAppsOwner;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: BranchRestrictionPolicyRestrictionsAppsPermissions;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class BranchRestrictionPolicyRestrictionsTeams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: any;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: string;

  @SpeakeasyMetadata({ data: "json, name=repositories_url" })
  repositoriesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyRestrictionsUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: BranchRestrictionPolicyRestrictionsApps })
  apps?: BranchRestrictionPolicyRestrictionsApps[];

  @SpeakeasyMetadata({ data: "json, name=apps_url" })
  appsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=teams", elemType: BranchRestrictionPolicyRestrictionsTeams })
  teams?: BranchRestrictionPolicyRestrictionsTeams[];

  @SpeakeasyMetadata({ data: "json, name=teams_url" })
  teamsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: BranchRestrictionPolicyRestrictionsUsers })
  users?: BranchRestrictionPolicyRestrictionsUsers[];

  @SpeakeasyMetadata({ data: "json, name=users_url" })
  usersUrl?: string;
}


export class BranchRestrictionPolicyTeams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=members_url" })
  membersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: string;

  @SpeakeasyMetadata({ data: "json, name=repositories_url" })
  repositoriesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class BranchRestrictionPolicyUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// BranchRestrictionPolicy
/** 
 * Branch Restriction Policy
**/
export class BranchRestrictionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: BranchRestrictionPolicyApps })
  apps: BranchRestrictionPolicyApps[];

  @SpeakeasyMetadata({ data: "json, name=apps_url" })
  appsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions", elemType: BranchRestrictionPolicyRestrictions })
  restrictions?: BranchRestrictionPolicyRestrictions[];

  @SpeakeasyMetadata({ data: "json, name=teams", elemType: BranchRestrictionPolicyTeams })
  teams: BranchRestrictionPolicyTeams[];

  @SpeakeasyMetadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: BranchRestrictionPolicyUsers })
  users: BranchRestrictionPolicyUsers[];

  @SpeakeasyMetadata({ data: "json, name=users_url" })
  usersUrl: string;
}
