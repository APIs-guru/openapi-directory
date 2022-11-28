import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CancelSubscriptionQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class CancelSubscriptionSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class CancelSubscriptionRequest extends SpeakeasyBase {
    pathParams: CancelSubscriptionPathParams;
    queryParams: CancelSubscriptionQueryParams;
    security: CancelSubscriptionSecurity;
}
export declare class CancelSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
