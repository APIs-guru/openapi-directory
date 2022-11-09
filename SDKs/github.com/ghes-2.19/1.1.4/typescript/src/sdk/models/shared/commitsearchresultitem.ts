import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Verification } from "./verification";
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";


export class CommitSearchResultItemSimpleUser extends SpeakeasyBase {
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


export class CommitSearchResultItemCommitAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CommitSearchResultItemCommitGitUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CommitSearchResultItemCommitTree extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CommitSearchResultItemCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: CommitSearchResultItemCommitAuthor;

  @Metadata({ data: "json, name=comment_count" })
  commentCount: number;

  @Metadata({ data: "json, name=committer" })
  committer: CommitSearchResultItemCommitGitUser;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=tree" })
  tree: CommitSearchResultItemCommitTree;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=verification" })
  verification?: Verification;
}


export class CommitSearchResultItemGitUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CommitSearchResultItemParents extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// CommitSearchResultItem
/** 
 * Commit Search Result Item
**/
export class CommitSearchResultItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: CommitSearchResultItemSimpleUser;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=commit" })
  commit: CommitSearchResultItemCommit;

  @Metadata({ data: "json, name=committer" })
  committer: CommitSearchResultItemGitUser;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=parents", elemType: shared.CommitSearchResultItemParents })
  parents: CommitSearchResultItemParents[];

  @Metadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=text_matches", elemType: shared.SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
