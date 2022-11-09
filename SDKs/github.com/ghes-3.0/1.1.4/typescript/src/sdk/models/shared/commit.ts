import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Verification } from "./verification";


export class CommitSimpleUser extends SpeakeasyBase {
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


export class CommitCommitGitUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CommitCommitTree extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CommitCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: CommitCommitGitUser;

  @Metadata({ data: "json, name=comment_count" })
  commentCount: number;

  @Metadata({ data: "json, name=committer" })
  committer: CommitCommitGitUser;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=tree" })
  tree: CommitCommitTree;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=verification" })
  verification?: Verification;
}


export class CommitFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=additions" })
  additions?: number;

  @Metadata({ data: "json, name=blob_url" })
  blobUrl?: string;

  @Metadata({ data: "json, name=changes" })
  changes?: number;

  @Metadata({ data: "json, name=contents_url" })
  contentsUrl?: string;

  @Metadata({ data: "json, name=deletions" })
  deletions?: number;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=patch" })
  patch?: string;

  @Metadata({ data: "json, name=previous_filename" })
  previousFilename?: string;

  @Metadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class CommitParents extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CommitStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=additions" })
  additions?: number;

  @Metadata({ data: "json, name=deletions" })
  deletions?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


// Commit
/** 
 * Commit
**/
export class Commit extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: CommitSimpleUser;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=commit" })
  commit: CommitCommit;

  @Metadata({ data: "json, name=committer" })
  committer: CommitSimpleUser;

  @Metadata({ data: "json, name=files", elemType: shared.CommitFiles })
  files?: CommitFiles[];

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=parents", elemType: shared.CommitParents })
  parents: CommitParents[];

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=stats" })
  stats?: CommitStats;

  @Metadata({ data: "json, name=url" })
  url: string;
}
