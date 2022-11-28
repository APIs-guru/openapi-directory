import { SpeakeasyBase } from "../../../internal/utils";
export declare class LdapMappingUserPlan extends SpeakeasyBase {
    collaborators: number;
    name: string;
    privateRepos: number;
    space: number;
}
/**
 * Ldap Private User
**/
export declare class LdapMappingUser extends SpeakeasyBase {
    avatarUrl: string;
    bio: string;
    blog: string;
    businessPlus?: boolean;
    collaborators: number;
    company: string;
    createdAt: Date;
    diskUsage: number;
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
    ldapDn?: string;
    location: string;
    login: string;
    name: string;
    nodeId: string;
    organizationsUrl: string;
    ownedPrivateRepos: number;
    plan?: LdapMappingUserPlan;
    privateGists: number;
    publicGists: number;
    publicRepos: number;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    suspendedAt?: Date;
    totalPrivateRepos: number;
    twitterUsername?: string;
    twoFactorAuthentication: boolean;
    type: string;
    updatedAt: Date;
    url: string;
}
