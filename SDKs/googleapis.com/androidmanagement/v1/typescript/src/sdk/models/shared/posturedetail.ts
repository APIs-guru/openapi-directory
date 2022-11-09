import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserFacingMessage } from "./userfacingmessage";

export enum PostureDetailSecurityRiskEnum {
    SecurityRiskUnspecified = "SECURITY_RISK_UNSPECIFIED"
,    UnknownOs = "UNKNOWN_OS"
,    CompromisedOs = "COMPROMISED_OS"
,    HardwareBackedEvaluationFailed = "HARDWARE_BACKED_EVALUATION_FAILED"
}


// PostureDetail
/** 
 * Additional details regarding the security posture of the device.
**/
export class PostureDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=advice", elemType: shared.UserFacingMessage })
  advice?: UserFacingMessage[];

  @Metadata({ data: "json, name=securityRisk" })
  securityRisk?: PostureDetailSecurityRiskEnum;
}
