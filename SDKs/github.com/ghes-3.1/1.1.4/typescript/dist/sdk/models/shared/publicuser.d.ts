import { SpeakeasyBase } from "../../../internal/utils";
export declare class PublicUserPlan extends SpeakeasyBase {
    collaborators: number;
    name: string;
    privateRepos: number;
    space: number;
}
/**
 * Public User
**/
export declare class PublicUser extends SpeakeasyBase {
    avatarUrl: string;
    bio: string;
    blog: string;
    collaborators?: number;
    company: string;
    createdAt: Date;
    diskUsage?: number;
    email: string;
    eventsUrl: string;
    followers: number;
    followersUrl: string;
    following: number;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    hireable: boolean;
    htmlUrl: string;
    id: number;
    location: string;
    login: string;
    name: string;
    nodeId: string;
    organizationsUrl: string;
    ownedPrivateRepos?: number;
    plan?: PublicUserPlan;
    privateGists?: number;
    publicGists: number;
    publicRepos: number;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    suspendedAt?: Date;
    totalPrivateRepos?: number;
    twitterUsername?: string;
    type: string;
    updatedAt: Date;
    url: string;
}
