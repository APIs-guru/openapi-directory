import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { IssueEventDismissedReview } from "./issueeventdismissedreview";
import { IssueSimple } from "./issuesimple";
import { IssueEventLabel } from "./issueeventlabel";
import { IssueEventMilestone } from "./issueeventmilestone";
import { IssueEventProjectCard } from "./issueeventprojectcard";
import { IssueEventRename } from "./issueeventrename";
import { Team } from "./team";


export class IssueEventSimpleUser extends SpeakeasyBase {
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


// IssueEvent
/** 
 * Issue Event
**/
export class IssueEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor: IssueEventSimpleUser;

  @Metadata({ data: "json, name=assignee" })
  assignee?: IssueEventSimpleUser;

  @Metadata({ data: "json, name=assigner" })
  assigner?: IssueEventSimpleUser;

  @Metadata({ data: "json, name=author_association" })
  authorAssociation?: AuthorAssociationEnum;

  @Metadata({ data: "json, name=commit_id" })
  commitId: string;

  @Metadata({ data: "json, name=commit_url" })
  commitUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=dismissed_review" })
  dismissedReview?: IssueEventDismissedReview;

  @Metadata({ data: "json, name=event" })
  event: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issue" })
  issue?: IssueSimple;

  @Metadata({ data: "json, name=label" })
  label?: IssueEventLabel;

  @Metadata({ data: "json, name=lock_reason" })
  lockReason?: string;

  @Metadata({ data: "json, name=milestone" })
  milestone?: IssueEventMilestone;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=performed_via_github_app" })
  performedViaGithubApp?: Map<string, any>;

  @Metadata({ data: "json, name=project_card" })
  projectCard?: IssueEventProjectCard;

  @Metadata({ data: "json, name=rename" })
  rename?: IssueEventRename;

  @Metadata({ data: "json, name=requested_reviewer" })
  requestedReviewer?: IssueEventSimpleUser;

  @Metadata({ data: "json, name=requested_team" })
  requestedTeam?: Team;

  @Metadata({ data: "json, name=review_requester" })
  reviewRequester?: IssueEventSimpleUser;

  @Metadata({ data: "json, name=url" })
  url: string;
}
