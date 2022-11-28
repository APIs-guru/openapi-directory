import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1Policy } from "./googleiamv1policy";
/**
 * Request message for `SetIamPolicy` method.
**/
export declare class GoogleIamV1SetIamPolicyRequest extends SpeakeasyBase {
    policy?: GoogleIamV1Policy;
    updateMask?: string;
}
