import { SpeakeasyBase } from "../../../internal/utils";
import { ReactionRollup } from "./reactionrollup";
export declare class TeamDiscussionSimpleUser extends SpeakeasyBase {
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
 * A team discussion is a persistent record of a free-form conversation within a team.
**/
export declare class TeamDiscussion extends SpeakeasyBase {
    author: TeamDiscussionSimpleUser;
    body: string;
    bodyHtml: string;
    bodyVersion: string;
    commentsCount: number;
    commentsUrl: string;
    createdAt: Date;
    htmlUrl: string;
    lastEditedAt: Date;
    nodeId: string;
    number: number;
    pinned: boolean;
    private: boolean;
    reactions?: ReactionRollup;
    teamUrl: string;
    title: string;
    updatedAt: Date;
    url: string;
}
