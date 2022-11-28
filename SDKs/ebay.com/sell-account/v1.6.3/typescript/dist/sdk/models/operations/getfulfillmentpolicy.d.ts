import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFulfillmentPolicyPathParams extends SpeakeasyBase {
    fulfillmentPolicyId: string;
}
export declare class GetFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetFulfillmentPolicyRequest extends SpeakeasyBase {
    pathParams: GetFulfillmentPolicyPathParams;
    security: GetFulfillmentPolicySecurity;
}
export declare class GetFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    fulfillmentPolicy?: shared.FulfillmentPolicy;
    statusCode: number;
}
