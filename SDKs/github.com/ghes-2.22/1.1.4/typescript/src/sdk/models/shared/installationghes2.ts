import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { Enterprise } from "./enterprise";



export class InstallationGhes2Permissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checks" })
  checks?: string;

  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=deployments" })
  deployments?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_administration" })
  organizationAdministration?: string;

  @SpeakeasyMetadata({ data: "json, name=pull_requests" })
  pullRequests?: string;

  @SpeakeasyMetadata({ data: "json, name=statuses" })
  statuses?: string;
}

export enum InstallationGhes2RepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}


export class InstallationGhes2SimpleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @SpeakeasyMetadata({ data: "json, name=starred_at" })
  starredAt?: string;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// InstallationGhes2
/** 
 * Installation
**/
export class InstallationGhes2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_tokens_url" })
  accessTokensUrl: string;

  @SpeakeasyMetadata({ data: "json, name=account" })
  account: any;

  @SpeakeasyMetadata({ data: "json, name=app_id" })
  appId: number;

  @SpeakeasyMetadata({ data: "json, name=app_slug" })
  appSlug: string;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: string[];

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: InstallationGhes2Permissions;

  @SpeakeasyMetadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repository_selection" })
  repositorySelection: InstallationGhes2RepositorySelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=single_file_name" })
  singleFileName: string;

  @SpeakeasyMetadata({ data: "json, name=suspended_at" })
  suspendedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=suspended_by" })
  suspendedBy?: InstallationGhes2SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=target_id" })
  targetId: number;

  @SpeakeasyMetadata({ data: "json, name=target_type" })
  targetType: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
