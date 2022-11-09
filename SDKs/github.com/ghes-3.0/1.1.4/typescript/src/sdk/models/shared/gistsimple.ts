import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleUser } from "./simpleuser";


export class GistSimpleFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GistSimpleGistFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GistSimpleGistSimpleUser extends SpeakeasyBase {
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


// GistSimpleGist
/** 
 * Gist
**/
export class GistSimpleGist extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments: number;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=files", elemType: shared.GistSimpleGistFiles })
  files: Map<string, GistSimpleGistFiles>;

  @Metadata({ data: "json, name=forks" })
  forks?: any[];

  @Metadata({ data: "json, name=forks_url" })
  forksUrl: string;

  @Metadata({ data: "json, name=git_pull_url" })
  gitPullUrl: string;

  @Metadata({ data: "json, name=git_push_url" })
  gitPushUrl: string;

  @Metadata({ data: "json, name=history" })
  history?: any[];

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=owner" })
  owner?: GistSimpleGistSimpleUser;

  @Metadata({ data: "json, name=public" })
  public: boolean;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user: GistSimpleGistSimpleUser;
}


// GistSimple
/** 
 * Gist Simple
**/
export class GistSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: number;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl?: string;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=files", elemType: shared.GistSimpleFiles })
  files?: Map<string, GistSimpleFiles>;

  @Metadata({ data: "json, name=fork_of" })
  forkOf?: GistSimpleGist;

  @Metadata({ data: "json, name=forks" })
  forks?: Map<string, any>[];

  @Metadata({ data: "json, name=forks_url" })
  forksUrl?: string;

  @Metadata({ data: "json, name=git_pull_url" })
  gitPullUrl?: string;

  @Metadata({ data: "json, name=git_push_url" })
  gitPushUrl?: string;

  @Metadata({ data: "json, name=history" })
  history?: Map<string, any>[];

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: SimpleUser;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}
