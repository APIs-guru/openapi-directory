import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionStateQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetSubscriptionStateSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetSubscriptionStateRequest extends SpeakeasyBase {
    queryParams: GetSubscriptionStateQueryParams;
    security: GetSubscriptionStateSecurity;
}
export declare class GetSubscriptionStateResponse extends SpeakeasyBase {
    contentType: string;
    itvSubscriptionState?: shared.ItvSubscriptionState;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
