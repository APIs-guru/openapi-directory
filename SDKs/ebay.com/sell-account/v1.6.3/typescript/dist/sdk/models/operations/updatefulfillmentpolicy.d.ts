import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFulfillmentPolicyPathParams extends SpeakeasyBase {
    fulfillmentPolicyId: string;
}
export declare class UpdateFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateFulfillmentPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateFulfillmentPolicyPathParams;
    request: shared.FulfillmentPolicyRequest;
    security: UpdateFulfillmentPolicySecurity;
}
export declare class UpdateFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;
    statusCode: number;
}
