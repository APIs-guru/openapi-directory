import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntitlementsQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetEntitlementsSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetEntitlementsRequest extends SpeakeasyBase {
    queryParams: GetEntitlementsQueryParams;
    security: GetEntitlementsSecurity;
}
export declare class GetEntitlementsResponse extends SpeakeasyBase {
    contentType: string;
    entitlements?: shared.Entitlement[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
