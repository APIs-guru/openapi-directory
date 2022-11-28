import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionStatusPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class GetSubscriptionStatusQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetSubscriptionStatusSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetSubscriptionStatusRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionStatusPathParams;
    queryParams: GetSubscriptionStatusQueryParams;
    security: GetSubscriptionStatusSecurity;
}
export declare class GetSubscriptionStatusResponse extends SpeakeasyBase {
    contentType: string;
    itvSubscriptionStatusResponse?: shared.ItvSubscriptionStatusResponse;
    statusCode: number;
}
