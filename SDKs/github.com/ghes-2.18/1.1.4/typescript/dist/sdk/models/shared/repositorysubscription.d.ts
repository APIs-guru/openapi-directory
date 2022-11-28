import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Repository invitations let you manage who you collaborate with.
**/
export declare class RepositorySubscription extends SpeakeasyBase {
    createdAt: Date;
    ignored: boolean;
    reason: string;
    repositoryUrl: string;
    subscribed: boolean;
    url: string;
}
