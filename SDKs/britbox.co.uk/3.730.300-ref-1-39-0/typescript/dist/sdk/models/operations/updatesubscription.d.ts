import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateSubscriptionQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    planId?: string;
}
export declare class UpdateSubscriptionSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    pathParams: UpdateSubscriptionPathParams;
    queryParams: UpdateSubscriptionQueryParams;
    security: UpdateSubscriptionSecurity;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
