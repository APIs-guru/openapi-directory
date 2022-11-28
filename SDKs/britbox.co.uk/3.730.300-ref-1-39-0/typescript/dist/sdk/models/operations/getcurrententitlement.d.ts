import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCurrentEntitlementQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetCurrentEntitlementSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetCurrentEntitlementRequest extends SpeakeasyBase {
    queryParams: GetCurrentEntitlementQueryParams;
    security: GetCurrentEntitlementSecurity;
}
export declare class GetCurrentEntitlementResponse extends SpeakeasyBase {
    contentType: string;
    itvEntitlementCurrent?: shared.ItvEntitlementCurrent;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
