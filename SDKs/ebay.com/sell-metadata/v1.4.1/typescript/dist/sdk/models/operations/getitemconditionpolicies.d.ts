import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemConditionPoliciesPathParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetItemConditionPoliciesQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetItemConditionPoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetItemConditionPoliciesRequest extends SpeakeasyBase {
    pathParams: GetItemConditionPoliciesPathParams;
    queryParams: GetItemConditionPoliciesQueryParams;
    security: GetItemConditionPoliciesSecurity;
}
export declare class GetItemConditionPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    itemConditionPolicyResponse?: shared.ItemConditionPolicyResponse;
    statusCode: number;
}
