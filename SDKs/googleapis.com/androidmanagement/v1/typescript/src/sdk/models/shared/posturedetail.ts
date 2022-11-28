import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserFacingMessage } from "./userfacingmessage";


export enum PostureDetailSecurityRiskEnum {
    SecurityRiskUnspecified = "SECURITY_RISK_UNSPECIFIED",
    UnknownOs = "UNKNOWN_OS",
    CompromisedOs = "COMPROMISED_OS",
    HardwareBackedEvaluationFailed = "HARDWARE_BACKED_EVALUATION_FAILED"
}


// PostureDetail
/** 
 * Additional details regarding the security posture of the device.
**/
export class PostureDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advice", elemType: UserFacingMessage })
  advice?: UserFacingMessage[];

  @SpeakeasyMetadata({ data: "json, name=securityRisk" })
  securityRisk?: PostureDetailSecurityRiskEnum;
}
