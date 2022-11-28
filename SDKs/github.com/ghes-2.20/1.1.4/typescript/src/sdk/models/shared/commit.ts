import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";



export class CommitSimpleUser extends SpeakeasyBase {
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


export class CommitCommitGitUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CommitCommitTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CommitCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author: CommitCommitGitUser;

  @SpeakeasyMetadata({ data: "json, name=comment_count" })
  commentCount: number;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer: CommitCommitGitUser;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=tree" })
  tree: CommitCommitTree;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: Verification;
}


export class CommitFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions" })
  additions?: number;

  @SpeakeasyMetadata({ data: "json, name=blob_url" })
  blobUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=changes" })
  changes?: number;

  @SpeakeasyMetadata({ data: "json, name=contents_url" })
  contentsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=deletions" })
  deletions?: number;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=patch" })
  patch?: string;

  @SpeakeasyMetadata({ data: "json, name=previous_filename" })
  previousFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class CommitParents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CommitStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions" })
  additions?: number;

  @SpeakeasyMetadata({ data: "json, name=deletions" })
  deletions?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


// Commit
/** 
 * Commit
**/
export class Commit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author: CommitSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: CommitCommit;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer: CommitSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: CommitFiles })
  files?: CommitFiles[];

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: CommitParents })
  parents: CommitParents[];

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: CommitStats;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
