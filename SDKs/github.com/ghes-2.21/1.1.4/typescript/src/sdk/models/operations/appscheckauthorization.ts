import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsCheckAuthorizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsCheckAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsCheckAuthorizationPathParams;
}


export class AppsCheckAuthorizationAuthorizationApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum {
    All = "all"
,    Selected = "selected"
}


export class AppsCheckAuthorizationAuthorizationScopedInstallation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: shared.SimpleUser;

  @Metadata({ data: "json, name=has_multiple_single_files" })
  hasMultipleSingleFiles?: boolean;

  @Metadata({ data: "json, name=permissions" })
  permissions: shared.AppPermissions;

  @Metadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @Metadata({ data: "json, name=repository_selection" })
  repositorySelection: AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum;

  @Metadata({ data: "json, name=single_file_name" })
  singleFileName: string;

  @Metadata({ data: "json, name=single_file_paths" })
  singleFilePaths?: string[];
}


export class AppsCheckAuthorizationAuthorizationSimpleUser extends SpeakeasyBase {
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


export class AppsCheckAuthorizationAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=app" })
  app: AppsCheckAuthorizationAuthorizationApp;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @Metadata({ data: "json, name=hashed_token" })
  hashedToken: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=installation" })
  installation?: AppsCheckAuthorizationAuthorizationScopedInstallation;

  @Metadata({ data: "json, name=note" })
  note: string;

  @Metadata({ data: "json, name=note_url" })
  noteUrl: string;

  @Metadata({ data: "json, name=scopes" })
  scopes: string[];

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=token_last_eight" })
  tokenLastEight: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user?: AppsCheckAuthorizationAuthorizationSimpleUser;
}


export class AppsCheckAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  authorization?: AppsCheckAuthorizationAuthorization;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
