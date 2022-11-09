import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";
import { Enterprise } from "./enterprise";


export class InstallationGhes2Permissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=checks" })
  checks?: string;

  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=deployments" })
  deployments?: string;

  @Metadata({ data: "json, name=issues" })
  issues?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=organization_administration" })
  organizationAdministration?: string;

  @Metadata({ data: "json, name=pull_requests" })
  pullRequests?: string;

  @Metadata({ data: "json, name=statuses" })
  statuses?: string;
}

export enum InstallationGhes2RepositorySelectionEnum {
    All = "all"
,    Selected = "selected"
}


export class InstallationGhes2SimpleUser extends SpeakeasyBase {
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


// InstallationGhes2
/** 
 * Installation
**/
export class InstallationGhes2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_tokens_url" })
  accessTokensUrl: string;

  @Metadata({ data: "json, name=account" })
  account: any;

  @Metadata({ data: "json, name=app_id" })
  appId: number;

  @Metadata({ data: "json, name=app_slug" })
  appSlug: string;

  @Metadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=events" })
  events: string[];

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=permissions" })
  permissions: InstallationGhes2Permissions;

  @Metadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @Metadata({ data: "json, name=repository_selection" })
  repositorySelection: InstallationGhes2RepositorySelectionEnum;

  @Metadata({ data: "json, name=single_file_name" })
  singleFileName: string;

  @Metadata({ data: "json, name=suspended_at" })
  suspendedAt?: Date;

  @Metadata({ data: "json, name=suspended_by" })
  suspendedBy?: InstallationGhes2SimpleUser;

  @Metadata({ data: "json, name=target_id" })
  targetId: number;

  @Metadata({ data: "json, name=target_type" })
  targetType: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
