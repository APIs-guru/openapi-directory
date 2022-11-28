import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivitySetRepoSubscriptionPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivitySetRepoSubscriptionRequestBody extends SpeakeasyBase {
    ignored?: boolean;
    subscribed?: boolean;
}
export declare class ActivitySetRepoSubscriptionRequest extends SpeakeasyBase {
    pathParams: ActivitySetRepoSubscriptionPathParams;
    request?: ActivitySetRepoSubscriptionRequestBody;
}
export declare class ActivitySetRepoSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    repositorySubscription?: shared.RepositorySubscription;
}
