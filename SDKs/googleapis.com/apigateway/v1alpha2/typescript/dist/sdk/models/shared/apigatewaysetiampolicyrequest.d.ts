import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayPolicy } from "./apigatewaypolicy";
/**
 * Request message for `SetIamPolicy` method.
**/
export declare class ApigatewaySetIamPolicyRequest extends SpeakeasyBase {
    policy?: ApigatewayPolicy;
    updateMask?: string;
}
