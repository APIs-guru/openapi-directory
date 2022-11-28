import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrganizationFullPlan extends SpeakeasyBase {
    filledSeats?: number;
    name: string;
    privateRepos: number;
    seats?: number;
    space: number;
}
/**
 * Organization Full
**/
export declare class OrganizationFull extends SpeakeasyBase {
    avatarUrl: string;
    billingEmail?: string;
    blog?: string;
    collaborators?: number;
    company?: string;
    createdAt: Date;
    defaultRepositoryPermission?: string;
    description: string;
    diskUsage?: number;
    email?: string;
    eventsUrl: string;
    followers: number;
    following: number;
    hasOrganizationProjects: boolean;
    hasRepositoryProjects: boolean;
    hooksUrl: string;
    htmlUrl: string;
    id: number;
    isVerified?: boolean;
    issuesUrl: string;
    location?: string;
    login: string;
    membersAllowedRepositoryCreationType?: string;
    membersCanCreateInternalRepositories?: boolean;
    membersCanCreatePages?: boolean;
    membersCanCreatePrivatePages?: boolean;
    membersCanCreatePrivateRepositories?: boolean;
    membersCanCreatePublicPages?: boolean;
    membersCanCreatePublicRepositories?: boolean;
    membersCanCreateRepositories?: boolean;
    membersUrl: string;
    name?: string;
    nodeId: string;
    ownedPrivateRepos?: number;
    plan?: OrganizationFullPlan;
    privateGists?: number;
    publicGists: number;
    publicMembersUrl: string;
    publicRepos: number;
    reposUrl: string;
    totalPrivateRepos?: number;
    twitterUsername?: string;
    twoFactorRequirementEnabled?: boolean;
    type: string;
    updatedAt: Date;
    url: string;
}
