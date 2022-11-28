import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
export declare class MigrationSimpleUser extends SpeakeasyBase {
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
 * A migration.
**/
export declare class Migration extends SpeakeasyBase {
    archiveUrl?: string;
    createdAt: Date;
    exclude?: any[];
    excludeAttachments: boolean;
    guid: string;
    id: number;
    lockRepositories: boolean;
    nodeId: string;
    owner: MigrationSimpleUser;
    repositories: Repository[];
    state: string;
    updatedAt: Date;
    url: string;
}
