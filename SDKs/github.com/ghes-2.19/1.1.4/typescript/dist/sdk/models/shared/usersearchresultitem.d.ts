import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResultTextMatches } from "./searchresulttextmatches";
/**
 * User Search Result Item
**/
export declare class UserSearchResultItem extends SpeakeasyBase {
    avatarUrl: string;
    bio?: string;
    blog?: string;
    company?: string;
    createdAt?: Date;
    email?: string;
    eventsUrl: string;
    followers?: number;
    followersUrl: string;
    following?: number;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    hireable?: boolean;
    htmlUrl: string;
    id: number;
    location?: string;
    login: string;
    name?: string;
    nodeId: string;
    organizationsUrl: string;
    publicGists?: number;
    publicRepos?: number;
    receivedEventsUrl: string;
    reposUrl: string;
    score: number;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    suspendedAt?: Date;
    textMatches?: SearchResultTextMatches[];
    type: string;
    updatedAt?: Date;
    url: string;
}
