import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
export declare class GistCommentSimpleUser extends SpeakeasyBase {
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
 * A comment made to a gist.
**/
export declare class GistComment extends SpeakeasyBase {
    authorAssociation: AuthorAssociationEnum;
    body: string;
    createdAt: Date;
    id: number;
    nodeId: string;
    updatedAt: Date;
    url: string;
    user: GistCommentSimpleUser;
}
