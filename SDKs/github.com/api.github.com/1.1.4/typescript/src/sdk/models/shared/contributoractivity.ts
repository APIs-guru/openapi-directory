import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContributorActivitySimpleUser extends SpeakeasyBase {
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


export class ContributorActivityWeeks extends SpeakeasyBase {
  @Metadata({ data: "json, name=a" })
  a?: number;

  @Metadata({ data: "json, name=c" })
  c?: number;

  @Metadata({ data: "json, name=d" })
  d?: number;

  @Metadata({ data: "json, name=w" })
  w?: string;
}


// ContributorActivity
/** 
 * Contributor Activity
**/
export class ContributorActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: ContributorActivitySimpleUser;

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=weeks", elemType: shared.ContributorActivityWeeks })
  weeks: ContributorActivityWeeks[];
}
