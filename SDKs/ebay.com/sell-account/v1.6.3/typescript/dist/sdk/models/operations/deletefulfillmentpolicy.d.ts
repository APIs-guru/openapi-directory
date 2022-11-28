import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFulfillmentPolicyPathParams extends SpeakeasyBase {
    fulfillmentPolicyId: string;
}
export declare class DeleteFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteFulfillmentPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteFulfillmentPolicyPathParams;
    security: DeleteFulfillmentPolicySecurity;
}
export declare class DeleteFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
