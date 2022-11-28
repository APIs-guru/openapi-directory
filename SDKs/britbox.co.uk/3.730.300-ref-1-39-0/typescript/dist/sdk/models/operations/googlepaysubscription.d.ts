import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GooglePaySubscriptionQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GooglePaySubscriptionSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GooglePaySubscriptionRequest extends SpeakeasyBase {
    queryParams: GooglePaySubscriptionQueryParams;
    request: shared.ItvGooglePaySubscriptionRequest;
    security: GooglePaySubscriptionSecurity;
}
export declare class GooglePaySubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
