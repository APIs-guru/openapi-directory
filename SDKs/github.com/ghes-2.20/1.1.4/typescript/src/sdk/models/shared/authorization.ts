import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { AppPermissions } from "./apppermissions";



export class AuthorizationApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum AuthorizationScopedInstallationRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}


export class AuthorizationScopedInstallation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=has_multiple_single_files" })
  hasMultipleSingleFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: AppPermissions;

  @SpeakeasyMetadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repository_selection" })
  repositorySelection: AuthorizationScopedInstallationRepositorySelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=single_file_name" })
  singleFileName: string;

  @SpeakeasyMetadata({ data: "json, name=single_file_paths" })
  singleFilePaths?: string[];
}


export class AuthorizationSimpleUser extends SpeakeasyBase {
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


// Authorization
/** 
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
**/
export class Authorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app: AuthorizationApp;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=hashed_token" })
  hashedToken: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=installation" })
  installation?: AuthorizationScopedInstallation;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;

  @SpeakeasyMetadata({ data: "json, name=note_url" })
  noteUrl: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: string[];

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=token_last_eight" })
  tokenLastEight: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: AuthorizationSimpleUser;
}
