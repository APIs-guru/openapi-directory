import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFulfillmentPoliciesQueryParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetFulfillmentPoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetFulfillmentPoliciesRequest extends SpeakeasyBase {
    queryParams: GetFulfillmentPoliciesQueryParams;
    security: GetFulfillmentPoliciesSecurity;
}
export declare class GetFulfillmentPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    fulfillmentPolicyResponse?: shared.FulfillmentPolicyResponse;
    statusCode: number;
}
