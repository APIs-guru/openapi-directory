import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItvPurchasePlatformPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class DeleteItvPurchasePlatformQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class DeleteItvPurchasePlatformSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class DeleteItvPurchasePlatformRequest extends SpeakeasyBase {
    pathParams: DeleteItvPurchasePlatformPathParams;
    queryParams: DeleteItvPurchasePlatformQueryParams;
    request: shared.ItvCancelSubscriptionRequest;
    security: DeleteItvPurchasePlatformSecurity;
}
export declare class DeleteItvPurchasePlatformResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
