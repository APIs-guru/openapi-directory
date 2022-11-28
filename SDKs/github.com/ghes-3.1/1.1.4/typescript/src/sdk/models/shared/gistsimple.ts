import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";



export class GistSimpleFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GistSimpleGistFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GistSimpleGistSimpleUser extends SpeakeasyBase {
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


// GistSimpleGist
/** 
 * Gist
**/
export class GistSimpleGist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: number;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: GistSimpleGistFiles })
  files: Map<string, GistSimpleGistFiles>;

  @SpeakeasyMetadata({ data: "json, name=forks" })
  forks?: any[];

  @SpeakeasyMetadata({ data: "json, name=forks_url" })
  forksUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_pull_url" })
  gitPullUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_push_url" })
  gitPushUrl: string;

  @SpeakeasyMetadata({ data: "json, name=history" })
  history?: any[];

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: GistSimpleGistSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public: boolean;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: GistSimpleGistSimpleUser;
}


// GistSimple
/** 
 * Gist Simple
**/
export class GistSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: number;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=commits_url" })
  commitsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: GistSimpleFiles })
  files?: Map<string, GistSimpleFiles>;

  @SpeakeasyMetadata({ data: "json, name=fork_of" })
  forkOf?: GistSimpleGist;

  @SpeakeasyMetadata({ data: "json, name=forks" })
  forks?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=forks_url" })
  forksUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_pull_url" })
  gitPullUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_push_url" })
  gitPushUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=history" })
  history?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
