import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductAdoptionPoliciesPathParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetProductAdoptionPoliciesQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetProductAdoptionPoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetProductAdoptionPoliciesRequest extends SpeakeasyBase {
    pathParams: GetProductAdoptionPoliciesPathParams;
    queryParams: GetProductAdoptionPoliciesQueryParams;
    security: GetProductAdoptionPoliciesSecurity;
}
export declare class GetProductAdoptionPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    productAdoptionPolicyResponse?: shared.ProductAdoptionPolicyResponse;
    statusCode: number;
}
