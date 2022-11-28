import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";



export class CommitSearchResultItemSimpleUser extends SpeakeasyBase {
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


export class CommitSearchResultItemCommitAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CommitSearchResultItemCommitGitUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CommitSearchResultItemCommitTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CommitSearchResultItemCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author: CommitSearchResultItemCommitAuthor;

  @SpeakeasyMetadata({ data: "json, name=comment_count" })
  commentCount: number;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer: CommitSearchResultItemCommitGitUser;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=tree" })
  tree: CommitSearchResultItemCommitTree;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: Verification;
}


export class CommitSearchResultItemGitUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CommitSearchResultItemParents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// CommitSearchResultItem
/** 
 * Commit Search Result Item
**/
export class CommitSearchResultItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author: CommitSearchResultItemSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: CommitSearchResultItemCommit;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer: CommitSearchResultItemGitUser;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: CommitSearchResultItemParents })
  parents: CommitSearchResultItemParents[];

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
