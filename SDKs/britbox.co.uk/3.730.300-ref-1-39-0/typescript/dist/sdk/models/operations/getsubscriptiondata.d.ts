import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionDataPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSubscriptionDataRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionDataPathParams;
}
export declare class GetSubscriptionDataResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    subscriptionDetails?: shared.SubscriptionDetails;
}
