import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutomotivePartsCompatibilityPoliciesPathParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetAutomotivePartsCompatibilityPoliciesQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetAutomotivePartsCompatibilityPoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetAutomotivePartsCompatibilityPoliciesRequest extends SpeakeasyBase {
    pathParams: GetAutomotivePartsCompatibilityPoliciesPathParams;
    queryParams: GetAutomotivePartsCompatibilityPoliciesQueryParams;
    security: GetAutomotivePartsCompatibilityPoliciesSecurity;
}
export declare class GetAutomotivePartsCompatibilityPoliciesResponse extends SpeakeasyBase {
    automotivePartsCompatibilityPolicyResponse?: shared.AutomotivePartsCompatibilityPolicyResponse;
    contentType: string;
    statusCode: number;
}
