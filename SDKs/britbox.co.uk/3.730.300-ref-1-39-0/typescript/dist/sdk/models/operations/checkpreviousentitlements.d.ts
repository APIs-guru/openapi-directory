import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckPreviousEntitlementsQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class CheckPreviousEntitlementsSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class CheckPreviousEntitlementsRequest extends SpeakeasyBase {
    queryParams: CheckPreviousEntitlementsQueryParams;
    security: CheckPreviousEntitlementsSecurity;
}
export declare class CheckPreviousEntitlementsResponse extends SpeakeasyBase {
    contentType: string;
    itvHadEntitlement?: shared.ItvHadEntitlement;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
