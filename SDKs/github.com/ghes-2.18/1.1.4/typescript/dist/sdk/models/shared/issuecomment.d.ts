import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
export declare class IssueCommentSimpleUser extends SpeakeasyBase {
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
 * Comments provide a way for people to collaborate on an issue.
**/
export declare class IssueComment extends SpeakeasyBase {
    authorAssociation: AuthorAssociationEnum;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    createdAt: Date;
    htmlUrl: string;
    id: number;
    issueUrl: string;
    nodeId: string;
    performedViaGithubApp?: Map<string, any>;
    reactions?: ReactionRollup;
    updatedAt: Date;
    url: string;
    user: IssueCommentSimpleUser;
}
