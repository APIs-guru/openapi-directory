import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReturnPoliciesPathParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetReturnPoliciesQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetReturnPoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReturnPoliciesRequest extends SpeakeasyBase {
    pathParams: GetReturnPoliciesPathParams;
    queryParams: GetReturnPoliciesQueryParams;
    security: GetReturnPoliciesSecurity;
}
export declare class GetReturnPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicyResponse?: shared.ReturnPolicyResponse;
    statusCode: number;
}
