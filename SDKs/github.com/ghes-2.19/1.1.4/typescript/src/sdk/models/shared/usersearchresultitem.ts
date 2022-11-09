import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResultTextMatches } from "./searchresulttextmatches";


// UserSearchResultItem
/** 
 * User Search Result Item
**/
export class UserSearchResultItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=bio" })
  bio?: string;

  @Metadata({ data: "json, name=blog" })
  blog?: string;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=followers" })
  followers?: number;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @Metadata({ data: "json, name=following" })
  following?: number;

  @Metadata({ data: "json, name=following_url" })
  followingUrl: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @Metadata({ data: "json, name=hireable" })
  hireable?: boolean;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @Metadata({ data: "json, name=public_gists" })
  publicGists?: number;

  @Metadata({ data: "json, name=public_repos" })
  publicRepos?: number;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=suspended_at" })
  suspendedAt?: Date;

  @Metadata({ data: "json, name=text_matches", elemType: shared.SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
