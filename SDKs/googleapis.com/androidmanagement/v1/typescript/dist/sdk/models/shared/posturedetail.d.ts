import { SpeakeasyBase } from "../../../internal/utils";
import { UserFacingMessage } from "./userfacingmessage";
export declare enum PostureDetailSecurityRiskEnum {
    SecurityRiskUnspecified = "SECURITY_RISK_UNSPECIFIED",
    UnknownOs = "UNKNOWN_OS",
    CompromisedOs = "COMPROMISED_OS",
    HardwareBackedEvaluationFailed = "HARDWARE_BACKED_EVALUATION_FAILED"
}
/**
 * Additional details regarding the security posture of the device.
**/
export declare class PostureDetail extends SpeakeasyBase {
    advice?: UserFacingMessage[];
    securityRisk?: PostureDetailSecurityRiskEnum;
}
