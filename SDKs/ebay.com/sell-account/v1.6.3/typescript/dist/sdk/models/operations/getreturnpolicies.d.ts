import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReturnPoliciesQueryParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetReturnPoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReturnPoliciesRequest extends SpeakeasyBase {
    queryParams: GetReturnPoliciesQueryParams;
    security: GetReturnPoliciesSecurity;
}
export declare class GetReturnPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicyResponse?: shared.ReturnPolicyResponse;
    statusCode: number;
}
