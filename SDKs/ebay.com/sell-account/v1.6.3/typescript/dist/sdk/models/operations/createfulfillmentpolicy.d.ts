import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFulfillmentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateFulfillmentPolicyRequest extends SpeakeasyBase {
    request: shared.FulfillmentPolicyRequest;
    security: CreateFulfillmentPolicySecurity;
}
export declare class CreateFulfillmentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;
    statusCode: number;
}
