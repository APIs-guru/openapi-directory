import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostureDetail } from "./posturedetail";

export enum SecurityPostureDevicePostureEnum {
    PostureUnspecified = "POSTURE_UNSPECIFIED"
,    Secure = "SECURE"
,    AtRisk = "AT_RISK"
,    PotentiallyCompromised = "POTENTIALLY_COMPROMISED"
}


// SecurityPosture
/** 
 * The security posture of the device, as determined by the current device state and the policies applied.
**/
export class SecurityPosture extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePosture" })
  devicePosture?: SecurityPostureDevicePostureEnum;

  @Metadata({ data: "json, name=postureDetails", elemType: shared.PostureDetail })
  postureDetails?: PostureDetail[];
}
