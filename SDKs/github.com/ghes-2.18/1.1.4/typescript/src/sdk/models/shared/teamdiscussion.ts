import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReactionRollup } from "./reactionrollup";


export class TeamDiscussionSimpleUser extends SpeakeasyBase {
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


// TeamDiscussion
/** 
 * A team discussion is a persistent record of a free-form conversation within a team.
**/
export class TeamDiscussion extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: TeamDiscussionSimpleUser;

  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=body_html" })
  bodyHtml: string;

  @Metadata({ data: "json, name=body_version" })
  bodyVersion: string;

  @Metadata({ data: "json, name=comments_count" })
  commentsCount: number;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=last_edited_at" })
  lastEditedAt: Date;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=pinned" })
  pinned: boolean;

  @Metadata({ data: "json, name=private" })
  private: boolean;

  @Metadata({ data: "json, name=reactions" })
  reactions?: ReactionRollup;

  @Metadata({ data: "json, name=team_url" })
  teamUrl: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
