import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityGetRepoSubscriptionPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityGetRepoSubscriptionRequest extends SpeakeasyBase {
    pathParams: ActivityGetRepoSubscriptionPathParams;
}
export declare class ActivityGetRepoSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    repositorySubscription?: shared.RepositorySubscription;
}
