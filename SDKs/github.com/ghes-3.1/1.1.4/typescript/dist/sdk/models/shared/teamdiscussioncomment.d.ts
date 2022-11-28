import { SpeakeasyBase } from "../../../internal/utils";
import { ReactionRollup } from "./reactionrollup";
export declare class TeamDiscussionCommentSimpleUser extends SpeakeasyBase {
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
 * A reply to a discussion within a team.
**/
export declare class TeamDiscussionComment extends SpeakeasyBase {
    author: TeamDiscussionCommentSimpleUser;
    body: string;
    bodyHtml: string;
    bodyVersion: string;
    createdAt: Date;
    discussionUrl: string;
    htmlUrl: string;
    lastEditedAt: Date;
    nodeId: string;
    number: number;
    reactions?: ReactionRollup;
    updatedAt: Date;
    url: string;
}
