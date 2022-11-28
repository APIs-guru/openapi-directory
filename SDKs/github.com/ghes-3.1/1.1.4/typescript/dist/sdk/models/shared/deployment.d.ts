import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeploymentSimpleUser extends SpeakeasyBase {
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
 * A request for a specific ref(branch,sha,tag) to be deployed
**/
export declare class Deployment extends SpeakeasyBase {
    createdAt: Date;
    creator: DeploymentSimpleUser;
    description: string;
    environment: string;
    id: number;
    nodeId: string;
    originalEnvironment?: string;
    payload: any;
    performedViaGithubApp?: Map<string, any>;
    productionEnvironment?: boolean;
    ref: string;
    repositoryUrl: string;
    sha: string;
    statusesUrl: string;
    task: string;
    transientEnvironment?: boolean;
    updatedAt: Date;
    url: string;
}
