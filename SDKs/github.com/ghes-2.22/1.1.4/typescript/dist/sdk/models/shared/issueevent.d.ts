import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { IssueEventDismissedReview } from "./issueeventdismissedreview";
import { IssueSimple } from "./issuesimple";
import { IssueEventLabel } from "./issueeventlabel";
import { IssueEventMilestone } from "./issueeventmilestone";
import { IssueEventProjectCard } from "./issueeventprojectcard";
import { IssueEventRename } from "./issueeventrename";
import { Team } from "./team";
export declare class IssueEventSimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
/**
 * Issue Event
**/
export declare class IssueEvent extends SpeakeasyBase {
    actor: IssueEventSimpleUser;
    assignee?: IssueEventSimpleUser;
    assigner?: IssueEventSimpleUser;
    authorAssociation?: AuthorAssociationEnum;
    commitId: string;
    commitUrl: string;
    createdAt: Date;
    dismissedReview?: IssueEventDismissedReview;
    event: string;
    id: number;
    issue?: IssueSimple;
    label?: IssueEventLabel;
    lockReason?: string;
    milestone?: IssueEventMilestone;
    nodeId: string;
    performedViaGithubApp?: Map<string, any>;
    projectCard?: IssueEventProjectCard;
    rename?: IssueEventRename;
    requestedReviewer?: IssueEventSimpleUser;
    requestedTeam?: Team;
    reviewRequester?: IssueEventSimpleUser;
    url: string;
}
