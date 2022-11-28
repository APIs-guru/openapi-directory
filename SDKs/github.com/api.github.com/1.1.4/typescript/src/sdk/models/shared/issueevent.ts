import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { IssueEventDismissedReview } from "./issueeventdismissedreview";
import { IssueSimple } from "./issuesimple";
import { IssueEventLabel } from "./issueeventlabel";
import { IssueEventMilestone } from "./issueeventmilestone";
import { IssueEventProjectCard } from "./issueeventprojectcard";
import { IssueEventRename } from "./issueeventrename";
import { Team } from "./team";



export class IssueEventSimpleUser extends SpeakeasyBase {
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


// IssueEvent
/** 
 * Issue Event
**/
export class IssueEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: IssueEventSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: IssueEventSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=assigner" })
  assigner?: IssueEventSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=author_association" })
  authorAssociation?: AuthorAssociationEnum;

  @SpeakeasyMetadata({ data: "json, name=commit_id" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=commit_url" })
  commitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dismissed_review" })
  dismissedReview?: IssueEventDismissedReview;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: IssueSimple;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: IssueEventLabel;

  @SpeakeasyMetadata({ data: "json, name=lock_reason" })
  lockReason?: string;

  @SpeakeasyMetadata({ data: "json, name=milestone" })
  milestone?: IssueEventMilestone;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=project_card" })
  projectCard?: IssueEventProjectCard;

  @SpeakeasyMetadata({ data: "json, name=rename" })
  rename?: IssueEventRename;

  @SpeakeasyMetadata({ data: "json, name=requested_reviewer" })
  requestedReviewer?: IssueEventSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=requested_team" })
  requestedTeam?: Team;

  @SpeakeasyMetadata({ data: "json, name=review_requester" })
  reviewRequester?: IssueEventSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
