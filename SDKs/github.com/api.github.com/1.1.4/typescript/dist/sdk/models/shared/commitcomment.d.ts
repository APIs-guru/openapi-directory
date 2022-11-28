import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
export declare class CommitCommentSimpleUser extends SpeakeasyBase {
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
 * Commit Comment
**/
export declare class CommitComment extends SpeakeasyBase {
    authorAssociation: AuthorAssociationEnum;
    body: string;
    commitId: string;
    createdAt: Date;
    htmlUrl: string;
    id: number;
    line: number;
    nodeId: string;
    path: string;
    position: number;
    reactions?: ReactionRollup;
    updatedAt: Date;
    url: string;
    user: CommitCommentSimpleUser;
}
