import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNegotiatedPricePoliciesPathParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetNegotiatedPricePoliciesQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetNegotiatedPricePoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetNegotiatedPricePoliciesRequest extends SpeakeasyBase {
    pathParams: GetNegotiatedPricePoliciesPathParams;
    queryParams: GetNegotiatedPricePoliciesQueryParams;
    security: GetNegotiatedPricePoliciesSecurity;
}
export declare class GetNegotiatedPricePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    negotiatedPricePolicyResponse?: shared.NegotiatedPricePolicyResponse;
    statusCode: number;
}
