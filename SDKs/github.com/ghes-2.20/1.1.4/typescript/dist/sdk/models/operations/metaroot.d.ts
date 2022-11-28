import { SpeakeasyBase } from "../../../internal/utils";
export declare class MetaRoot200ApplicationJson extends SpeakeasyBase {
    authorizationsUrl: string;
    codeSearchUrl: string;
    commitSearchUrl: string;
    currentUserAuthorizationsHtmlUrl: string;
    currentUserRepositoriesUrl: string;
    currentUserUrl: string;
    emailsUrl: string;
    emojisUrl: string;
    eventsUrl: string;
    feedsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    hubUrl: string;
    issueSearchUrl: string;
    issuesUrl: string;
    keysUrl: string;
    labelSearchUrl: string;
    notificationsUrl: string;
    organizationRepositoriesUrl: string;
    organizationTeamsUrl: string;
    organizationUrl: string;
    publicGistsUrl: string;
    rateLimitUrl: string;
    repositorySearchUrl: string;
    repositoryUrl: string;
    starredGistsUrl: string;
    starredUrl: string;
    topicSearchUrl?: string;
    userOrganizationsUrl: string;
    userRepositoriesUrl: string;
    userSearchUrl: string;
    userUrl: string;
}
export declare class MetaRootResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    metaRoot200ApplicationJsonObject?: MetaRoot200ApplicationJson;
}
