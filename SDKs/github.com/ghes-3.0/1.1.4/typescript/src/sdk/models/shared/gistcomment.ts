import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";



export class GistCommentSimpleUser extends SpeakeasyBase {
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


// GistComment
/** 
 * A comment made to a gist.
**/
export class GistComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author_association" })
  authorAssociation: AuthorAssociationEnum;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: GistCommentSimpleUser;
}
